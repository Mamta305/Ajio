const cypress = require("cypress");
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  return config;

}
module.exports = defineConfig({
  e2e: {
   setupNodeEvents,
   specPattern:"cypress/integration/*.js",
   baseUrl:"https://www.ajio.com/",
  },
 chromeWebSecurity:false,
});
