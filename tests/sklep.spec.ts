import { test, expect } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("http://skleptest.pl/");
  const siteTitle = await page.locator("a.site-title");
  await expect(siteTitle).toContainText("Generic Shop");
});

test("Open Most Wanted category", async ({ page }) => {
  await page.goto("http://skleptest.pl/");
  await page.click('a[title="Most Wanted"]');
  await expect(page).toHaveURL(
    "http://skleptest.pl/product-category/most-wanted/"
  );
});

test("Login form", async ({ page }) => {
  await page.goto("http://skleptest.pl/");
  await page.click(".top-account");
  await page.click('input[name="login"]');
  const errorMessage = await page.locator(".woocommerce-error li");
  await expect(errorMessage).toContainText("Error: Username is required.");
});

test.skip("Selektory", async ({ page }) => {
  //tekst
  await page.click("tekst=just another shop");

  //CSS
  await page.click("button");
  await page.click("#id");
  await page.click(".class");

  //visible
  await page.click("button:visible");
  await page.click("button.submitButton");

  //XPath
  await page.click("/header/div/div/div/p");
  await page.click('//h3[@class="widget-title"]');
});
