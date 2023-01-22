import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly shopNavButton: Locator;
  readonly wantedNavButton: Locator;
  readonly categoriesNavButton: Locator;
  readonly allCategoryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteTitle = page.locator("a.site-title");
    this.shopNavButton = page.locator("a[title='Shop']");
    this.wantedNavButton = page.locator("a[title='Most Wanted']");
    this.categoriesNavButton = page.locator("a[title='Catergries']");
    this.allCategoryButton = page.locator("a[title='All']");
  }

  async loadHomePage() {
    const pageTitle = await this.siteTitle;
    await this.page.goto("/");
    await expect(pageTitle).toContainText("Generic Shop");
  }
}
