import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

const details = JSON.parse(JSON.stringify(require('../pageobjects/testdata/logindetails.json')));

test('Product Count Check', async ({ page }) => {
    const username = details[2].username;

    const poManager = new POManager(page);
    await poManager.getLoginPage().goTo();
    await poManager.getLoginPage().validLogin(details[2].email, details[2].password);
    await page.waitForLoadState('networkidle');

    //validate account level
    await poManager.getAccountOverviewPage().selectAccount(username);
    const accountLevelUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Account Level Url : ' + accountLevelUrl);
    expect(accountLevelUrl).toContain('account');
    var breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual(username);

    //validate project dashboard
    await poManager.getProjectListingsPage().clickOnProjectByName('Automation Sites');
    await poManager.getCommonPage().validateUiCaption('Automation Sites');
    const projectDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Project Dashboard Url : ' + projectDashboardUrl);
    expect(projectDashboardUrl).toContain('projects');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toContain('Automation Sites');

    //validate site dashboard
    await poManager.getSiteListingsPage().clickOnSite();
    //await poManager.getSiteListingsPage().clickOnSiteByName('Client Tools Inc.');
    const siteDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Site Dashboard Url : ' + siteDashboardUrl);
    expect(siteDashboardUrl).toContain("site\/dashboard");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect(breadcrumb).toEqual('Dashboard');

    // await poManager.getCommonPage().hoverOnPupLogo();
    // await poManager.getCommonPage().openDataView();
    // await poManager.getCommonPage().validateUiCaption('Data View');

    // const dataViewUrl = await poManager.getCommonPage().getCurrentPageUrl();
    // console.log('Data View Url : ' + dataViewUrl);
    // expect(dataViewUrl).toContain('data-view');
});