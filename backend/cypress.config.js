const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node events podem ser adicionados aqui
    },
    // Ajuste para a pasta correta dos seus testes
    specPattern: path.resolve(__dirname, "../cypress/e2e/1-getting-started/**/*.js"),
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
