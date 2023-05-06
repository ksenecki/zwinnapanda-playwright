import fs from "fs";
import lighthouse from "lighthouse";
import chromeLauncher from "chrome-launcher";

const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
const options = {
  logLevel: "info",
  output: "html",
  onlyCategories: ["performance"],
  port: chrome.port,
};

const config = {
  extends: "lighthouse:default",
  settings: { formFactor: "desktop", screenEmulation: { mobile: false } },
};

// const config = {
//   extends: "lighthouse:default",
//   settings: { formFactor: "mobile", screenEmulation: { mobile: true } },
// };

const runnerResult = await lighthouse("https://skleptest.pl/", options, config);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
const dir = "./lighthouse-report/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(`${dir}/LighthouseReport.html`, reportHtml);

// `.lhr` is the Lighthouse Result as a JS object
console.log("Report is done for", runnerResult.lhr.finalDisplayedUrl);
console.log(
  "Performance score was",
  runnerResult.lhr.categories.performance.score * 100
);

await chrome.kill();
