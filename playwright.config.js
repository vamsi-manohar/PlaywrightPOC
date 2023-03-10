// @ts-check
import { devices } from '@playwright/test';
const config = {
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 120000
  },
  reporter: [['html',{
    outputFile: './test-results/report.html',
    open: 'never'
  }],['allure-playwright']],
  
  // fullyParallel: false,
 //reporter: [['html', {outputFolder:`/Users/vamsimanohar/playwrightJS/${Date.now()}`}], ['list']],
  use: {
 
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'on',
    //viewport: {width: 1440, height: 900},
 
   launchOptions:
   {
     args: ["--start-maximized"]
   },
 
  }

  
}
export default config;
