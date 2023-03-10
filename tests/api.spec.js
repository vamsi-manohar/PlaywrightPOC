// const {test,expect} = require('@playwright/test');

// const {POManager} = require ('../pageobjects/POManager');

// const details =  JSON.parse(JSON.stringify(require('details[1].username,details[1].password)')));
// let browser, context, page;

// beforeAll(async () => {
//   browser = await chromium.launch();
// });

// beforeEach(async () => {
//   context = await browser.newContext();
//   page = await context.newPage();
  
//   // Check if login cookie is already present, if not, perform login
//   const cookies = await context.cookies();
//   const poManager = new POManager(page);
//   const isLoggedIn = cookies.some(cookie => cookie.name === 'REMEMBERME');
//   const hasUserID = cookies.some(cookie => cookie.name === 'userID');
//   if (!isLoggedIn || !hasUserID) {

//     await (await poManager.getLoginPage().goTo()).validLogin();
// ;
//     await page.waitForNavigation();
//     await context.storageState({ path: 'storage.json' });
//   } else {
//     await context.addCookies(cookies);
//     await context.storageState({ path: 'storage.json' });
//     await poManager.getLoginPage().goTo();
//     //await page.goto('https://yourwebsite.com/dashboard');
//   }
// });

// afterEach(async () => {
//   await context.clearCookies();
//   await page.close();
// });

// afterAll(async () => {
//   await browser.close();
// });

// test('@T Test 1', async () => {

//     console.log('Frist Test Case')
//   // Test 1 code here
// });

// test('@T Test 2', async () => {
//   // Test 2 code here
// });

// test('@T Test 3', async () => {
//   // Test 3 code here
// });

// // More tests...
