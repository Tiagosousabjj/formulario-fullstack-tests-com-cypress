const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Event listeners podem ser adicionados aqui
    },
    // Aceita todos os arquivos .js dentro de e2e, incluindo .spec.js
    specPattern: path.resolve(__dirname, "../cypress/e2e/**/*.js"),
    // Caminho correto para o support file
    supportFile: path.resolve(__dirname, "../cypress/support/e2e.js"),
    // Timeout padrão opcional
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    // Browser padrão opcional
    browser: "chrome",
  },
});
