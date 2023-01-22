# zwinnapanda-playwright

Playwright tutorial repository for my channel: [@zwinnapanda](https://www.youtube.com/@zwinnapanda)

## Project requirements

1. [Node 16+](https://nodejs.org/en/docs/)

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
