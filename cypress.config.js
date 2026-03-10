const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://127.0.0.1:5501",

    setupNodeEvents(on, config) {
      if (config.env.baseUrl) {
        config.baseUrl = config.env.baseUrl;
      }

      return config;
    },
  },
});
