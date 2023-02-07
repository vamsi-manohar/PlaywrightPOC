// @ts-check
const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 120000
  },
  reporter: 'html',
 //reporter: [['html', {outputFolder:`/Users/vamsimanohar/playwrightJS/${Date.now()}`}], ['list']],
  use: {
 
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure'
 
  }

  
}
module.exports = config;
