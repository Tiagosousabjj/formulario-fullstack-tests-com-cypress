const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Event listeners, se precisar
    },
    // Somente os testes do seu projeto
    specPattern: path.resolve(__dirname, "../cypress/e2e/formulario/**/*.js"),
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    defaultCommandTimeout: 4000, // como esperado pelos testes
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
