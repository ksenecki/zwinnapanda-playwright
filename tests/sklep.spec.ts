import { test, expect } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("http://skleptest.pl/");
  const siteTitle = await page.locator("a.site-title");
  await expect(siteTitle).toContainText("Generic Shop");
});
