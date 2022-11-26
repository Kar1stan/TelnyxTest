import { defineConfig } from 'cypress'; 
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    },
    baseUrl: 'https://telnyx.com/',
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
  },
});
