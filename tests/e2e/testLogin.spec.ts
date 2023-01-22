import { test, expect } from "@playwright/test";
import { getRandomString } from "@utils/data-helpers";
import { MyAccountPage } from "@page-objects/MyAccountPage";

test.describe("E2E: Login Page tests", () => {
  let myAccountPage: MyAccountPage;
  test.beforeEach(async ({ page }) => {
    myAccountPage = new MyAccountPage(page);
    await myAccountPage.loadMyAccountPage();
  });

  test("Empty login form", async ({ page }) => {
    await myAccountPage.loginSubmitButton.click();
    await expect(myAccountPage.errorMessage).toContainText(
      "Error: Username is required."
    );
  });

  test("Empty user name field", async ({ page }) => {
    const randomPassword = await getRandomString();
    await myAccountPage.fillLoginForm("", randomPassword);
    await myAccountPage.loginSubmitButton.click();
    await expect(myAccountPage.errorMessage).toContainText(
      "Error: Username is required."
    );
  });

  test("Empty user password field", async ({ page }) => {
    const randomEmail = (await getRandomString()) + "@example.com";
    await myAccountPage.fillLoginForm(randomEmail, "");
    await myAccountPage.loginSubmitButton.click();
    await expect(myAccountPage.errorMessage).toContainText(
      "Error: A user could not be found with this email address."
    );
  });

  test("Lost password button", async ({ page }) => {
    await myAccountPage.lostPasswordButton.click();
    await expect(page).toHaveURL("/my-account/lost-password/");
  });
});
