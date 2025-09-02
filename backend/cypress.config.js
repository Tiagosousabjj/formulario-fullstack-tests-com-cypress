const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar event listeners se precisar
    },
    // Encontrar todos os testes .js dentro de e2e (incluindo .spec.js)
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.js"),
    // Caminho do support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
