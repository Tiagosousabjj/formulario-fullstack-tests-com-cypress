// backend/cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // event listeners se precisar
    },
    specPattern: "formulario.spec.js", // caminho relativo ao backend/
    supportFile: false,                 // se você não tiver suporte
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
