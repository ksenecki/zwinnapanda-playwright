import { HomePage } from "@page-objects/HomePage";
import { expect, test } from "@playwright/test";

test.describe.only("E2E: Footer tests", () => {
  let homePage: HomePage;
  //DRY = Don't Repeat Yourself
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test("Sign for newsletter", async ({ page }) => {
    await homePage.newsletterName.fill("test");
    await homePage.newsletterEmail.fill("test@example.com");
    await homePage.newsletterSubmitButton.click();
    await expect(homePage.newsletterMessage).toContainText(
      "Successfully Subscribed."
    );
  });

  test("Footer tags content", async ({ page }) => {
    const tags = await homePage.footerTags.allTextContents();
    const expectedTags = [
      "Autumn",
      "dress",
      "fashion",
      "jackets",
      "stockings",
      "trends",
    ];
    await expect(tags).toStrictEqual(expectedTags);
  });

  const tags = ["Autumn", "dress", "fashion", "jackets", "stockings", "trends"];
  tags.map((tag) => {
    test(`Footer tag links: ${tag}`, async ({ page }) => {
      const selectedTag = await page.locator(`.tagcloud >> text=${tag}`);
      await selectedTag.click();
      expect(page).toHaveURL(`/tag/${tag.toLowerCase()}/`);
    });
  });
});
