import { defineConfig } from 'cypress'; 
const allureWriter = require ('@shelex/cypress-allure-plugin/writer')

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

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
