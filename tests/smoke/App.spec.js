// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import { ListsOverviewPage } from '../../pageobjects/pages/Lists/ListsOverviewPage';
// const {POManager}= require('../../pageobjects/POManager');
// const {AppCommunication} = require ('../../pageobjects/pages/App-communication/AppCommunication');
// const details =  JSON.parse(JSON.stringify(require('../../pageobjects/testdata/logindetails.json')));
// const testData = JSON.parse(JSON.stringify(require("../../pageobjects/testdata/Exports/AddExports.json")));
// const assertion = JSON.parse(JSON.stringify(require("../../Assertions/AssertionText.json")));

// const authFile ="demo.json";
// let webContext;
// test.describe('In app communication tests', ()=>
// {

// test.beforeEach(async({page},testInfo)=>
// {
//     console.log(`Running ${testInfo.title}`);
//     const poManager = new POManager(page);
//     await (await poManager.getLoginPage().goTo()).validLogin(details[0].username, details[0].password);
//     await poManager.getProjectListingsPage().selectProject(testData.project);
//     expect(await poManager.getProjectListingsPage().getProjectPageTitle()).toBe(testData.project);
//     await poManager.getSiteListingsPage().selectSite(testData.site);
//     await poManager.getDashboardPage().isOnDashboardPage();
  
// });

// // test.beforeAll(async({browser})=>
// // {
// //    const context = await browser.newContext();
// //    const page=await context.newPage();
// //    const poManager = new POManager(page);
// //    await (await poManager.getLoginPage().goTo()).validLogin(details[0].username, details[0].password);
// //    //await context.storageState({path: 'demo.json'});
// //    //webContext = await browser.newContext({storageState: 'demo.json'});

// //     //webContext= await context.storageState(); 

// //     const storageState = await context.storageState();
// //     await fs.writeFileSync('storage.json', JSON.stringify(storageState));
// //     await context.close();

// // // const storageState = await context.storageState();
// // // await FileSystem.writeFile('storage.json',JSON.stringify(storageState));
// // // await context.close();

// // });



// test('@apptt Dataflow', async ({browser}) => {

//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToDataflow()).isOnDataflowPage();
//     await assertHelpPage(page);


// });

// test('@comm Error', async ({page}) => {

//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToErrorLog()).isOnErrorLogPage();
//     await assertHelpPage(page);

// });


// test('@apprt List', async ({ page }) => {
//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToListsPage()).isOnListsPage();
//     await assertHelpPage(page);
// });


// test('@comm services', async ({ page }) => {
//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToDataservicesPage()).isOnDataServicesPage();
//     await assertHelpPage(page);
// });

// test('@comm view', async ({ page }) => {
//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToDataviewPage()).isOnDataviewPage();
//     await assertHelpPage(page);
// });

// test('@comm exports', async ({ page }) => {
//     const poManager = new POManager(page);
//     await (await poManager.getSideNavigationMenu().navigateToExportAB()).isOnExportsPage();
//     await assertHelpPage(page);
// });



// })




// const assertHelpPage = async(page) => 
// {
//     const text = await (await new AppCommunication(page).openHelpLink()).navigateToHelpCenter();
//     expect(text).toBe(assertion.Communication.helpCenter);
// }
