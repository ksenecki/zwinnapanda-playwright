import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 30000,
  retries: 0,
  reporter: process.env.CI ? "github" : "list",
  testDir: "tests/e2e",
  use: {
    headless: true,
    baseURL: "https://skleptest.pl",
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
    video: "off",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "Chrome",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" },
    },
  ],
});
