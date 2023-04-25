const cypress = require("cypress");
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;

}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   setupNodeEvents,
   specPattern:"cypress/integration/POM.js",
   baseUrl:"https://www.ajio.com/",
  },
 chromeWebSecurity:false,
});
