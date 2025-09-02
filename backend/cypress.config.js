// backend/cypress.config.js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // configurar eventos Node se precisar
    },
    // arquivo de teste que está diretamente em backend/
    specPattern: "formulario.spec.js",
    supportFile: false,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
