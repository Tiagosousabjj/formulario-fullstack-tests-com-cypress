const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // aqui você pode configurar eventos do Node se precisar
    },
    // Aponta diretamente para a pasta de testes do formulário
    specPattern: "cypress/e2e/1-getting-started/formulario/**/*.js",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
