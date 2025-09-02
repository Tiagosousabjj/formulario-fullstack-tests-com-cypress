const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node events
    },
    specPattern: path.resolve(__dirname, "..cypress/cypress/e2e/1-getting-started/formulario/**/*.js"),
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
