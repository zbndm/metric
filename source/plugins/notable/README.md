<!--header-->
<table>
  <tr><td colspan="2"><a href="/README.md#-plugins">← Back to plugins index</a></td></tr>
  <tr><th colspan="2"><h3>🎩 Notable contributions</h3></th></tr>
  <tr><td colspan="2" align="center"><p>This plugin displays badges for notable contributions on repositories.</p>
</td></tr>
  <tr><th>⚠️ Disclaimer</th><td><p>This plugin is not affiliated, associated, authorized, endorsed by, or in any way officially connected with <a href="https://github.com">GitHub</a>.
All product and company names are trademarks™ or registered® trademarks of their respective holders.</p>
</td></tr>
  <tr>
    <th rowspan="3">Supported features<br><sub><a href="metadata.yml">→ Full specification</a></sub></th>
    <td><a href="/source/templates/classic/README.md"><code>📗 Classic template</code></a></td>
  </tr>
  <tr>
    <td><code>👤 Users</code></td>
  </tr>
  <tr>
    <td><code>🔑 (scopeless)</code> <code>read:org (optional)</code> <code>read:user (optional)</code> <code>read:packages (optional)</code> <code>repo (optional)</code></td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <details open><summary>Indepth analysis</summary><img src="https://github.com/lowlighter/metrics/blob/examples/metrics.plugin.notable.indepth.svg" alt=""></img></details>
      <details><summary>Contributions in organizations only</summary><img src="https://github.com/lowlighter/metrics/blob/examples/metrics.plugin.notable.svg" alt=""></img></details>
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
    <td nowrap="nowrap"><h4><code>plugin_notable</code></h4></td>
    <td rowspan="2"><p>Enable notable plugin</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>boolean</code>
<br>
<b>default:</b> no<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_filter</code></h4></td>
    <td rowspan="2"><p>Query filter</p>
<p>Based on <a href="https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax">GitHub search syntax</a>.
Supported fields are <code>stars</code>, <code>forks</code> and <code>watchers</code></p>
<p>If <a href="/source/plugins/notable/README.md#plugin_notable_indepth"><code>plugin_notable_indepth</code></a> is enabled, <code>commits</code>, <code>commits.user</code>, <code>commits.user%</code> and <code>maintainer</code> fields are also supported.
Some repositories may not be able to reported advanced stats and in the case the default behaviour will be to bypass filtering</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_skipped</code></h4></td>
    <td rowspan="2"><p>Skipped repositories</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap">⏩ Inherits <code>repositories_skipped</code><br>
<b>type:</b> <code>array</code>
<i>(newline-separated)</i>
<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_from</code></h4></td>
    <td rowspan="2"><p>Repository owner account type filter</p>
<ul>
<li><code>all</code>: no filtering</li>
<li><code>organization</code>: only organization accounts repositories</li>
<li><code>user</code>: only user accounts repositories</li>
</ul>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>string</code>
<br>
<b>default:</b> organization<br>
<b>allowed values:</b><ul><li>all</li><li>organization</li><li>user</li></ul></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_repositories</code></h4></td>
    <td rowspan="2"><p>Repository name</p>
<p>Repositories hosted by user account will always have their full handle displayed</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>boolean</code>
<br>
<b>default:</b> no<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_indepth</code></h4></td>
    <td rowspan="2"><p>Indepth mode</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap">🌐 Web instances must configure <code>settings.json</code>:
<ul>
<li><i>metrics.api.github.overuse</i></li>
</ul>
<b>type:</b> <code>boolean</code>
<br>
<b>default:</b> no<br></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_types</code></h4></td>
    <td rowspan="2"><p>Contribution types filter</p>
<p>Use a combination of below values to include repositories where:</p>
<ul>
<li><code>commit</code>: a commit on default branch was made</li>
<li><code>pull_request</code>: a pull request was opened</li>
<li><code>issue</code>: an issue was opened</li>
</ul>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>array</code>
<i>(comma-separated)</i>
<br>
<b>default:</b> commit<br>
<b>allowed values:</b><ul><li>commit</li><li>pull_request</li><li>issue</li></ul></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><h4><code>plugin_notable_self</code></h4></td>
    <td rowspan="2"><p>Include own repositories</p>
<img width="900" height="1" alt=""></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><b>type:</b> <code>boolean</code>
<br>
<b>default:</b> no<br></td>
  </tr>
</table>
<!--/options-->

## 🔎 `indepth` mode

The `plugin_notable_indepth` option collects additional stats about your contributions, such as:
- Total number of commits within a repository or organization.

For each of the above, a badge is awarded. Its color and progress depends of the associated value.

## ℹ️ Examples workflows

<!--examples-->
```yaml
name: Contributions
uses: lowlighter/metrics@latest
with:
  filename: metrics.plugin.notable.svg
  token: ${{ secrets.METRICS_TOKEN }}
  base: ""
  plugin_notable: yes

```
```yaml
name: Indepth analysis
uses: lowlighter/metrics@latest
with:
  filename: metrics.plugin.notable.indepth.svg
  token: ${{ secrets.METRICS_TOKEN }}
  base: ""
  plugin_notable: yes
  plugin_notable_indepth: yes
  plugin_notable_repositories: yes

```
<!--/examples-->
