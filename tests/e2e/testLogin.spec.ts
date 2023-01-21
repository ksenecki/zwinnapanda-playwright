import { test, expect } from "@playwright/test";
import { getRandomString } from "@utils/data-helpers";

test.describe.only("E2E: Login Page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/my-account/");
    const siteTitle = await page.locator(".page-title");
    await expect(siteTitle).toContainText("My account");
  });

  test("Empty login form", async ({ page }) => {
    await page.click('input[name="login"]');
    const errorMessage = await page.locator(".woocommerce-error li");
    await expect(errorMessage).toContainText("Error: Username is required.");
  });

  test("Empty user name field", async ({ page }) => {
    const randomPassword = await getRandomString();
    const loginPasswordInput = await page.locator("#password");
    await loginPasswordInput.fill(randomPassword);
    await page.click('input[name="login"]');
    const errorMessage = await page.locator(".woocommerce-error li");
    await expect(errorMessage).toContainText("Error: Username is required.");
  });

  test("Empty user password field", async ({ page }) => {
    const randomEmail = (await getRandomString()) + "@example.com";
    const loginUsernameInput = await page.locator("#username");
    await loginUsernameInput.fill(randomEmail);
    await page.click('input[name="login"]');
    const errorMessage = await page.locator(".woocommerce-error li");
    await expect(errorMessage).toContainText(
      "Error: A user could not be found with this email address."
    );
  });

  test("Lost password button", async ({ page }) => {
    await page.click("text=Lost your password?");
    await expect(page).toHaveURL("/my-account/lost-password/");
  });
});
