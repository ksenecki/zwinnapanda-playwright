import { test } from "@playwright/test";
import { playAudit } from "playwright-lighthouse";
import * as playwright from "playwright";

test.describe("Lighthouse audit", () => {
  test("Audit TestSklep", async () => {
    const browser = await playwright["chromium"].launch({
      args: ["--remote-debugging-port=9222"],
    });

    const page = await browser.newPage();
    await page.goto("https://skleptest.pl");

    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        pwa: 50,
      },
      reports: {
        formats: {
          html: true,
        },
      },
      port: 9222,
    });

    await browser.close();
  });
});
