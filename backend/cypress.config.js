const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node events podem ser adicionados aqui
    },
    // Todos os testes .js dentro de cypress/e2e
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.js"),
    // Caminho do support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    // Timeout padrão esperado pelo teste
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
