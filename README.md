# zwinnapanda-playwright

Playwright tutorial repository for my channel: [@zwinnapanda](https://www.youtube.com/@zwinnapanda)

## Project requirements

1. [Node 18+](https://nodejs.org/en/docs/)

## How to setup the Project

1. Clone repository
2. Enter the project directory and execute `npm install` in order to install all the packages

## Install Playwright with npm

1. Playwright test module: `npm install @playwright/test`
2. Playwright tools and drivers: `npx playwright install`

## Starting e2e test execution

- basic test execution: `npx playwright test`
- run projects using node scripts `npm run tests:chrome` for `chrome`, `firefox` or `webkit`
- it is possible to add more flags when using npm scripts with `-- --<flag>`

## UI mode

Playwright 1.32 enables using interactive UI that can be run with `npx playwright test --ui`

## Visual test execution

- run tests using node scripts `npm run tests:visual`

## Api test execution

- run tests using node scripts `npm run tests:api`

## Debugging

- use `--debug` while debugging
- use `--trace on` to enable trace
- show trace either from `html` report or with `npx playwright show-trace test-results/../trace.zip`
- use [PW-watch](https://www.npmjs.com/package/@deploysentinel/playwright-watch) with `npx pw-watch --reporter @deploysentinel/playwright`

## Visual PDF tests

Using [compare-pdf](https://www.npmjs.com/package/compare-pdf)

Prerequisites:

```
sudo apt-get install graphicsmagick
sudo apt-get install imagemagick
sudo apt-get install ghostscript
```

In order to use ImageMagic `policy.xml` modification is needed
Use `sudo chmod 777 ~/etc/ImageMagick-6/policy.xml` and modify `policy.xml` as follows:
change `rights="none"` to `rights"read|write"` in line `<policy domain="module" rights="read|write" pattern="PDF" />`

- install `compare-pdf` with `npm install compare-pdf`
- `npm run test:pdf`

## PDF content tests

- `npm run test:pdf`
- package used: [pdf2json](https://www.npmjs.com/package/pdf2json)
- this is why `Node 18+` is needed

## Lighthouse

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#cli) is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.

To run Lighhouse test use `npm run lighthouse` command, reports will be generated in html format in `lighthoure-report` directory with name "LighthouseReport.html"
