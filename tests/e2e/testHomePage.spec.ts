import { test, expect } from "@playwright/test";
import { HomePage } from "@page-objects/HomePage";

test.describe("E2E: Home Page tests", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test("Go back to the main age", async ({ page }) => {
    await homePage.shopNavButton.click();
    expect(page).toHaveURL("/");
  });

  test.only("Open Most Wanted category", async ({ page }) => {
    await homePage.wantedNavButton.click();
    await expect(page).toHaveURL("/product-category/most-wanted/");
  });

  test("Test All Category nav button", async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    await homePage.allCategoryButton.click();
    expect(page).toHaveURL("/shop/");
  });

  const categories = [
    "Shirts",
    "Featured",
    "Trends",
    "Scarfs",
    "Shoes",
    "Tops",
    "Blouse",
    "Jeans",
    "Dresses",
  ];

  for (const category of categories) {
    test(`Test ${category} Category nav button`, async ({ page }) => {
      // const categoriesNavButton = await page.locator("a[title='Catergries']");
      await homePage.categoriesNavButton.hover();
      const chosenCategory = await page.locator(`a[title='${category}']`);
      await chosenCategory.click();
      expect(page).toHaveURL(`/product-category/${category.toLowerCase()}/`);
    });
  }
});
