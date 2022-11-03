import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    specPattern: '**/*.spec.{js,jsx,ts,tsx}'
  }
})
