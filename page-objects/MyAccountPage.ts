import { expect, Locator, Page } from "@playwright/test";

export class MyAccountPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly loginUserNameInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly errorMessage: Locator;
  readonly lostPasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".page-title");
    this.loginUserNameInput = page.locator("#username");
    this.loginPasswordInput = page.locator("#password");
    this.loginSubmitButton = page.locator('input[name="login"]');
    this.errorMessage = page.locator(".woocommerce-error li");
    this.lostPasswordButton = page.locator("text=Lost your password?");
  }

  async loadMyAccountPage() {
    const pageTitle = await this.pageTitle;
    await this.page.goto("/my-account/");
    await expect(pageTitle).toContainText("My account");
  }

  async fillLoginForm(login: string, password: string) {
    await this.loginUserNameInput.fill(login);
    await this.loginPasswordInput.fill(password);
  }
}
