const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eventos Node
    },
    specPattern: "**/formulario.spec.js", // glob correto
    supportFile: false,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
