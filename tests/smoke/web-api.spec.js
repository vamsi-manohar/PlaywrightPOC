const {test,expect} = require('@playwright/test');


const {POManager}= require('../../pageobjects/POManager');
const {AppCommunication} = require ('../../pageobjects/pages/App-communication/AppCommunication');

const details =  JSON.parse(JSON.stringify(require('../../pageobjects/testdata/logindetails.json')));
const testData = JSON.parse(JSON.stringify(require("../../pageobjects/testdata/Exports/AddExports.json")));
const assertion = JSON.parse(JSON.stringify(require("../../Assertions/AssertionText.json")));

/**
 * Login only once
 */
let webContext;
let beforePage;
//test.describe.configure({ mode: 'parallel' });
test.beforeAll(async({browser})=>
{
      
        const context =  await browser.newContext({viewport: null});
        const page = await context.newPage();

        // console.log(await page.viewportSize().width);
        // console.log(await page.viewportSize().height);

        const poManager = new POManager(page);
        await poManager.getLoginPage().goTo();
        await poManager.getLoginPage().validLogin(details[0].username, details[0].password);
        // await poManager.getProjectListingsPage().selectProject(testData.project);
        // expect(await poManager.getProjectListingsPage().getProjectPageTitle()).toBe(testData.project);
        // await poManager.getSiteListingsPage().selectSite(testData.site);
        // await poManager.getDashboardPage().isOnDashboardPage();

        await context.storageState({path: 'new_state.json'});
        await context.close();
        webContext = await browser.newContext({storageState: 'new_state.json'});

     
});


test.beforeEach(async()=>
{
    //console.log(`Running ${testInfo.title}`);

     beforePage = await webContext.newPage();
    //const page  = await webContext.newPage();
    const poManager = new POManager(beforePage);
    //await (await poManager.getLoginPage().goTo()).validLogin(details[0].username, details[0].password);
    await poManager.getLoginPage().goTo();
    await poManager.getProjectListingsPage().selectProject(testData.project);
    expect(await poManager.getProjectListingsPage().getProjectPageTitle()).toBe(testData.project);
    await poManager.getSiteListingsPage().selectSite(testData.site);
    await poManager.getDashboardPage().isOnDashboardPage();
 
  
});


test('@demo1 view', async () => {

       //const newPage = await selectSite();
       const poManager = new POManager(beforePage);
       await (await poManager.getSideNavigationMenu().navigateToDataviewPage()).isOnDataviewPage();
       //beforePage.close();
       await assertHelpPage(beforePage);
       
    
});

test('@demo exports--1', async () => {

    const poManager = new POManager(beforePage);
    await (await poManager.getSideNavigationMenu().navigateToExportAB()).isOnExportsPage();
    await assertHelpPage(beforePage);
 
});

test('@demo services', async () => {
    const poManager = new POManager(beforePage);
    await (await poManager.getSideNavigationMenu().navigateToDataservicesPage()).isOnDataServicesPage();
    await assertHelpPage(beforePage);
});


test('@demo Error', async () => {
    const poManager = new POManager(beforePage);
    await (await poManager.getSideNavigationMenu().navigateToErrorLog()).isOnErrorLogPage();
    await assertHelpPage(beforePage);

});

test('@demo Dataflow', async ({browser}) => {



    const poManager = new POManager(beforePage);
    await (await poManager.getSideNavigationMenu().navigateToDataflow()).isOnDataflowPage();
    await assertHelpPage(beforePage);


});

test.afterEach(async()=>
{
    beforePage.close();
  
});





const assertHelpPage = async(page) => 
{
    const text = await (await new AppCommunication(page).openHelpLink()).navigateToHelpCenter();
    expect(text).toBe(assertion.Communication.helpCenter);
}

const selectSite = async()=>
{
    const beforePage = await webContext.newPage();
    const poManager = new POManager(beforePage);
    //await (await poManager.getLoginPage().goTo()).validLogin(details[0].username, details[0].password);
    await poManager.getLoginPage().goTo();
    await poManager.getProjectListingsPage().selectProject(testData.project);
    expect(await poManager.getProjectListingsPage().getProjectPageTitle()).toBe(testData.project);
    await poManager.getSiteListingsPage().selectSite(testData.site);
    await poManager.getDashboardPage().isOnDashboardPage();
    return beforePage;
}
