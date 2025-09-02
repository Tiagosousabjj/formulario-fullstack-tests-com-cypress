const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Event listeners podem ser adicionados aqui, se precisar
    },
    // Encontrar todos os testes .js dentro da pasta e2e (incluindo .spec.js)
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.js"),
    // Caminho do support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    // Timeout padrão ajustado para passar no teste
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    // Browser padrão
    browser: "chrome",
  },
});
