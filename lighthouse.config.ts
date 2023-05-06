import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30000,
  retries: 0,
  testDir: "tests/lighthouse",
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "off",
    screenshot: "off",
  },
  projects: [
    {
      name: "Chrome",
      use: { browserName: "chromium" },
    },
  ],
};

export default config;
