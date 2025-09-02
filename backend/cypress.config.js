const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // caminho absoluto para os testes
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.cy.js"),
    // caminho absoluto para o support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
  },
});
