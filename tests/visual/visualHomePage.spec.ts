import { test, expect } from "@playwright/test";
import { HomePage } from "@page-objects/HomePage";

test.describe("Visual: Home Page tests", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test("Home Page screenshot", async ({ page }) => {
    const pageScrenshot = await page.screenshot();
    expect(pageScrenshot).toMatchSnapshot("home-page.png");
  });

  test("Home Page main slider", async ({ page }) => {
    const mainSliderScreenshot = await homePage.mainSlider.screenshot();
    expect(mainSliderScreenshot).toMatchSnapshot("main-slider.png");
  });

  test("Home Page without the main slider", async ({ page }) => {
    const pageWithoutMainSlider = await page.screenshot({
      mask: [homePage.mainSlider],
    });
    expect(pageWithoutMainSlider).toMatchSnapshot(
      "home-page-withou-main-slider.png",
      { threshold: 0.2 }
    );
  });
});
