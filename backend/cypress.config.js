import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eventos Node, se necessário
    },
    // Caminho relativo para os testes dentro de backend
    specPattern: "formulario.spec.js",
    supportFile: false, // como não há pasta support
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    browser: "chrome",
  },
});
