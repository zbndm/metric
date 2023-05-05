<!--header-->
<table>
  <tr><td colspan="2"><a href="/README.md#-plugins">← Back to plugins index</a></td></tr>
  <tr><th colspan="2"><h3>📸 Website screenshot</h3></th></tr>
  <tr><td colspan="2" align="center"><p>This plugin displays a screenshot from any website.</p>
<p>It can either show the full page or a portion restricted by a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">CSS selector</a>.</p>
</td></tr>
<tr><th>Authors</th><td><a href="https://github.com/lowlighter">@lowlighter</a></td></tr>
  <tr>
    <th rowspan="3">Supported features<br><sub><a href="metadata.yml">→ Full specification</a></sub></th>
    <td><a href="/source/templates/classic/README.md"><code>📗 Classic template</code></a> <a href="/source/templates/repository/README.md"><code>📘 Repository template</code></a> <a href="/source/templates/terminal/README.md"><code>📙 Terminal template</code></a></td>
  </tr>
  <tr>
    <td><code>👤 Users</code> <code>👥 Organizations</code> <code>📓 Repositories</code></td>
  </tr>
  <tr>
    <td><i>No tokens are required for this plugin</i></td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="https://github.com/lowlighter/metrics/blob/examples/metrics.plugin.screenshot.svg" alt=""></img>
      <img width="900" height="1" alt="">
    </td>
  </tr>
</table>
<!--/header-->

## ➡️ Available options

<!--options-->
<table>
  <tr>
    <td align="center" nowrap="nowrap">Option</i></td><td align="center" nowrap="nowrap">Description</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot</code></h4></td>
    <td rowspan="2"><p>Enable screenshot plugin</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap">🌐 Web instances must configure <code>settings.json</code>:
<ul>
<li><i>metrics.run.puppeteer.scrapping</i></li>
</ul>
<b>type:</b> <code>boolean</code>
<br>
<b>default:</b> no<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_title</code></h4></td>
    <td rowspan="2"><p>Title caption</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br>
<b>default:</b> Screenshot<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_url</code></h4></td>
    <td rowspan="2"><p>Website URL</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_selector</code></h4></td>
    <td rowspan="2"><p>CSS Selector</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br>
<b>default:</b> body<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_mode</code></h4></td>
    <td rowspan="2"><p>Output mode</p>
<ul>
<li><code>image</code>: screenshot of selected element</li>
<li><code>text</code>: keep <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText"><code>innerText</code></a> of selected element<ul>
<li><em>⚠️ Any CSS style applied to text such as font size, weight or color will be removed</em></li>
</ul>
</li>
</ul>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br>
<b>default:</b> image<br>
<b>allowed values:</b><ul><li>image</li><li>text</li></ul></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_viewport</code></h4></td>
    <td rowspan="2"><p>Viewport options</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>json</code>
<br>
<b>default:</b> <details><summary>→ Click to expand</summary><pre language="json"><code>{
  "width": 1280,
  "height": 1280
}
</code></pre></details><br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_wait</code></h4></td>
    <td rowspan="2"><p>Wait time before taking screenshot (ms)</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>number</code>
<i>(0 ≤
𝑥)</i>
<br>
<b>default:</b> 0<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_screenshot_background</code></h4></td>
    <td rowspan="2"><p>Background</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>boolean</code>
<br>
<b>default:</b> yes<br></td>
  </tr>
</table>
<!--/options-->

## ℹ️ Examples workflows

<!--examples-->
```yaml
name: XKCD of the day
uses: lowlighter/metrics@latest
with:
  filename: metrics.plugin.screenshot.svg
  token: NOT_NEEDED
  base: ""
  plugin_screenshot: yes
  plugin_screenshot_title: XKCD of the day
  plugin_screenshot_url: https://xkcd.com
  plugin_screenshot_selector: "#comic img"

```
<!--/examples-->
