const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar event listeners se precisar
    },
    // Padrão para encontrar todos os testes .cy.js na pasta e2e
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.cy.js"),
    // Caminho para o support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    // Timeout padrão (opcional)
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    // Browser padrão (opcional)
    browser: "chrome",
  },
});
