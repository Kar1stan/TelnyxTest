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
     args: [
        '--disable-gpu'                  
    ],
    baseUrl: 'https://telnyx.com/',
    specPattern: '**/*.spec.{js,jsx,ts,tsx},
    chromeWebSecurity: false,
  },
});
