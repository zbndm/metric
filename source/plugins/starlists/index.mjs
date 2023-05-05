//Setup
export default async function({login, q, imports, data, account}, {enabled = false, extras = false} = {}) {
  //Plugin execution
  try {
    //Check if plugin is enabled and requirements are met
    if ((!q.starlists) || (!imports.metadata.plugins.starlists.enabled(enabled, {extras})))
      return null

    //Load inputs
    let {limit, ignored, only, "limit.repositories": _limit, languages, "limit.languages": _limit_languages, "languages.ignored": _languages_ignored, "languages.aliases": _languages_aliases, "shuffle.repositories": _shuffle} = imports.metadata.plugins.starlists.inputs({data, account, q})
    ignored = ignored.map(imports.stripemojis)
    only = only.map(imports.stripemojis)
    _languages_aliases = Object.fromEntries(_languages_aliases.split(",").filter(alias => /^[\s\S]+:[\s\S]+$/.test(alias)).map(alias => alias.trim().split(":")).map(([key, value]) => [key.toLocaleLowerCase(), value]))

    //Start puppeteer and navigate to star lists
    console.debug(`metrics/compute/${login}/plugins > starlists > starting browser`)
    const browser = await imports.puppeteer.launch()
    console.debug(`metrics/compute/${login}/plugins > starlists > started ${await browser.version()}`)
    const page = await browser.newPage()

    //Fetch star lists
    console.debug(`metrics/compute/${login}/plugins > starlists > fetching lists`)
    await page.goto(`https://github.com/${login}?tab=stars`)
    let lists = await page.evaluate(login =>
      [...document.querySelectorAll(`[href^='/stars/${login}/lists']`)].map(element => ({
        link: element.href,
        name: element.querySelector("h3")?.innerText ?? "",
        description: element.querySelector("span")?.innerText ?? "",
        count: Number(element.querySelector("div")?.innerText.match(/(?<count>\d+)/)?.groups.count),
        repositories: [],
      })), login)
    const count = lists.length
    console.debug(`metrics/compute/${login}/plugins > starlists > found [${lists.map(({name}) => name)}]`)
    lists = lists
      .filter(({name}) => {
        name = imports.stripemojis(name ?? "").trim().toLocaleLowerCase()
        if (only.length)
          return only.includes(name)
        return !ignored.includes(name)
      })
      .slice(0, limit)
    console.debug(`metrics/compute/${login}/plugins > starlists > extracted ${lists.length} lists`)

    //Compute lists content
    const colors = {}
    for (const list of lists) {
      //Fetch star list content
      console.debug(`metrics/compute/${login}/plugins > starlists > fetching ${list.name}`)
      const repositories = []
      for (let i = 1; i <= (languages ? 100 : 1); i++) {
        console.debug(`metrics/compute/${login}/plugins > starlists > fetching page ${i}`)
        await page.goto(`${list.link}?page=${i}`)
        repositories.push(
          ...await page.evaluate(() =>
            [...document.querySelectorAll("#user-list-repositories > div:not(.paginate-container)")].map(element => ({
              name: element.querySelector("div:first-child")?.innerText.replace(" / ", "/") ?? "",
              description: element.querySelector(".py-1")?.innerText ?? "",
              language: {
                name: element.querySelector("[itemprop='programmingLanguage']")?.innerText ?? "",
                color: element.querySelector(".repo-language-color")?.style?.backgroundColor?.match(/\d+/g)?.map(x => Number(x).toString(16).padStart(2, "0")).join("") ?? null,
              },
              stargazers: Number(element.querySelector("[href$='/stargazers']")?.innerText.trim().replace(/[^\d]/g, "") ?? NaN),
              forks: Number(element.querySelector("[href$='/network/members']")?.innerText.trim().replace(/[^\d]/g, "") ?? NaN),
            }))
          ),
        )
        if (!(await page.evaluate(() => document.querySelector(".next_page"))) || await page.evaluate(() => document.querySelector(".next_page.disabled"))) {
          console.debug(`metrics/compute/${login}/plugins > starlists > reached last page`)
          break
        }
      }
      list.repositories.push(...repositories)
      if (_shuffle)
        list.repositories = imports.shuffle(list.repositories)

      //Compute languages statistics
      if (languages) {
        list.languages = {}
        for (const {language: {name, color}} of repositories) {
          let lang = name
          if (lang && lang.toLocaleLowerCase() in _languages_aliases)
            lang = _languages_aliases[name.toLocaleLowerCase()]
          if (lang)
            list.languages[lang] = (list.languages[lang] ?? 0) + 1
          if (color)
            colors[lang] = color
        }
        list.languages = Object.entries(list.languages).filter(([name]) => !_languages_ignored.includes(name.toLocaleLowerCase())).sort((a, b) => b[1] - a[1]).slice(0, _limit_languages || Infinity)
        const visible = list.languages.map(([_, value]) => value).reduce((a, b) => a + b, 0)
        list.languages = list.languages.map(([name, value]) => ({name, value, color: name in colors ? `#${colors[name]}` : null, x: 0, p: value / visible}))
        for (let i = 1; i < list.languages.length; i++)
          list.languages[i].x = (list.languages[i - 1]?.x ?? 0) + (list.languages[i - 1]?.value ?? 0) / visible
      }

      //Limit repositories
      list.repositories = list.repositories.slice(0, _limit)
    }

    //Close browser
    console.debug(`metrics/compute/${login}/plugins > starlists > closing browser`)
    await browser.close()

    //Results
    return {lists, count}
  }
  //Handle errors
  catch (error) {
    throw imports.format.error(error)
  }
}
