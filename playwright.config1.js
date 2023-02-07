// @ts-check
const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  retries: 1,
  workers: 3,
  timeout: 120 * 1000,
  expect: {

    timeout: 120000
  },
  reporter: 'html',

  projects: 
  [
    
    {
    name: 'chrome',
    use: 
    {
 
      browserName: 'chromium',
      headless: false,
      screenshot: 'on',
      trace: 'on',
      //...devices['iPhone 11 Pro Max'],
      //viewport: {width: 520, height: 520},
      ignoreHTTPSErrors: true,
      video: 'on'
      
   
    }
  },
  {
    name: 'safari',
    use: 
    {
 
      browserName: 'webkit',
      headless: false,
      screenshot: 'on',
      video: 'on'
   
    }
  },

  {
    name: 'firefox',
    use: 
    {
 
      browserName: 'firefox',
      headless: true,
      screenshot: 'on',
      trace: 'on',
      video: 'on'
   
    }
  }

    
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */


  
};

module.exports = config;
