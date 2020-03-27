# prepend-to-lines


<a href="https://raw.githubusercontent.com/jaid/prepend-to-lines/master/license.txt"><img src="https://img.shields.io/github/license/jaid/prepend-to-lines?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor prepend-to-lines"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/prepend-to-lines/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fprepend-to-lines%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/prepend-to-lines/commits"><img src="https://img.shields.io/github/commits-since/jaid/prepend-to-lines/v1.0.2?style=flat-square&logo=github" alt="Commits since v1.0.2"/></a> <a href="https://github.com/jaid/prepend-to-lines/commits"><img src="https://img.shields.io/github/last-commit/jaid/prepend-to-lines?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/prepend-to-lines/issues"><img src="https://img.shields.io/github/issues/jaid/prepend-to-lines?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/prepend-to-lines"><img src="https://img.shields.io/npm/v/prepend-to-lines?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/prepend-to-lines/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/prepend-to-lines?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/prepend-to-lines"><img src="https://img.shields.io/npm/dm/prepend-to-lines?style=flat-square&logo=npm" alt="Downloads"/></a>

**Prepends a string to each line of another string.**





## Installation

<a href="https://npmjs.com/package/prepend-to-lines"><img src="https://img.shields.io/badge/npm-prepend--to--lines-C23039?style=flat-square&logo=npm" alt="prepend-to-lines on npm"/></a>

```bash
npm install --save prepend-to-lines@^1.0.2
```

<a href="https://yarnpkg.com/package/prepend-to-lines"><img src="https://img.shields.io/badge/Yarn-prepend--to--lines-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="prepend-to-lines on Yarn"/></a>

```bash
yarn add prepend-to-lines@^1.0.2
```

<a href="https://github.com/jaid/prepend-to-lines/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/prepend--to--lines-24282e?style=flat-square&logo=github" alt="@jaid/prepend-to-lines on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/prepend-to-lines@^1.0.2
```



## Example


```javascript
import prependToLines from "prepend-to-lines"

const text = "I\nwant\nto\nbe\na\nMarkdown\nlist"
const result = prependToLines(text, "- ")

const linesArray = ["Hello", "world"]
const result2 = prependToLines(linesArray, "x")

const result3 = prependToLines("Without linebreaks", "* ")
```

Variable `result` will be:

```javascript
"- I\n- want\n- to\n- be\n- a\n- Markdown\n- list"
```
Variable `result2` will be:

```javascript
"xHello\nxworld"
```
Variable `result3` will be:

```javascript
"* Without linebreaks"
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/prepend-to-lines.git
cd prepend-to-lines
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/prepend-to-lines/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
