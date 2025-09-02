const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode configurar plugins ou eventos do Node
    },
    // Caminho correto para os testes dentro de backend/cypress
    specPattern: path.resolve(__dirname, "cypress/e2e/1-getting-started/formulario/**/*.js"),
    supportFile: path.resolve(__dirname, "cypress/support/e2e.js"),
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
