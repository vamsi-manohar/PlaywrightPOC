const {test,expect} = require('@playwright/test');
const { default: LoginPage } = require('../pageobjects/LoginPage');
const { AccountOverviewPage } = require('../pageobjects/pages/AccountOverviewPage');
//onst {LoginPage} = require('../pageobjects/LoginPage');
const {POManager} = require('../pageobjects/POManager');
const {customtest} = require('../pageobjects/testdata/fixtures/testbase')

const details =  JSON.parse(JSON.stringify(require('../pageobjects/testdata/logindetails.json')));



//test.describe.configure({mode: 'parallel'});     // executes all tests in this file parallely
//test.describe.configure({mode: 'serial'});      // executes all tests in this file serial mode, if one test fails all the other tests will fail
test('@Reg Valid Login Test ', async ({page})=>
{

    const username = "PUP Vamsi Manohar";
    const id=["194","213"];
    const poManager = new POManager(page);

    await poManager.getLoginPage().goTo();
    await poManager.getLoginPage().validLogin(details[1].username,details[1].password);
    await page.waitForLoadState('networkidle');
    await poManager.getAccountOverviewPage().selectAccount(username);
    await poManager.getProjectListingsPage().validateUserOnProjectListingsPage(username);
    // await poManager.getProjectListingsPage().searchProjectAndSitesByName("Services Demo");
    // await poManager.getProjectListingsPage().clearFilters();
    await poManager.getProjectListingsPage().addNewProject("Playwright Tests");
     await poManager.getSiteListingsPage().addNewSite("E2E TESTS-1");

    //  for (let i=0;i<2;i++)
    //  {
     await (await (await poManager.getDatasourcesPage().
     addDatasource()).searchDatasource("stream api")).selectDatasourceAndAdd("stream api");
    await (await (await poManager.getDatasourcesPage().selectStreamID(id)).saveDatasource()).triggerPlatformAction();
     //}

     //await poManager.getDatasourcesPage().configureAdditionalDatasource();

    
    


    //await (await poManager.getProjectListingsPage().validateUserOnProjectListingsPage(username)).
   // searchProjectAndSitesByName("Services Demo");




    //await poManager.getProjectListingsPage().clearFilters();
  



    //await account.selectAccount("PUP Vamsi Manohar");
  
    // await page.goto("https://staging-platform.productsup.com/login");
    //  const framePage=await page.frameLocator("#frame");
    // await framePage.locator("input[name='username']").type(username);
    // await framePage.locator("button:has-text('Next')").click();
    // await framePage.locator("input[name*='password']").type(password);
    // await framePage.locator("button:has-text('Log In')").click();

        //    await this.username.type(username);
        //    await this.nextButton.click();
        //    await this.password.type(password);
        //    await this.loginButton.click();

});


customtest('@Custom Test using fixturess', async ({page,dummyUser})=>
{


    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(dummyUser.username,dummyUser.password);
  


})
