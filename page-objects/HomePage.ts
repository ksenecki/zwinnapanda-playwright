import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly shopNavButton: Locator;
  readonly wantedNavButton: Locator;
  readonly categoriesNavButton: Locator;
  readonly allCategoryButton: Locator;
  readonly mainSlider: Locator;

  readonly newsletterName: Locator;
  readonly newsletterEmail: Locator;
  readonly newsletterSubmitButton: Locator;
  readonly newsletterMessage: Locator;
  readonly footerTags: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteTitle = page.locator("a.site-title");
    this.shopNavButton = page.locator("a[title='Shop']");
    this.wantedNavButton = page.locator("a[title='Most Wanted']");
    this.categoriesNavButton = page.locator("a[title='Catergries']");
    this.allCategoryButton = page.locator("a[title='All']");
    this.mainSlider = page.locator(".main-slider");

    this.newsletterName = page.locator("#es_txt_name");
    this.newsletterEmail = page.locator("#es_txt_email");
    this.newsletterSubmitButton = page.locator("#es_txt_button");
    this.newsletterMessage = page.locator("#es_widget_msg #es_msg");
    this.footerTags = page.locator(".tagcloud a");
  }

  async loadHomePage() {
    const pageTitle = await this.siteTitle;
    await this.page.goto("/");
    await expect(pageTitle).toContainText("Generic Shop");
  }
}
