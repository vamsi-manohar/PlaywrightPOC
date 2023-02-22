import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

const details = JSON.parse(JSON.stringify(require('../pageobjects/testdata/logindetails.json')));

test('Product Count Check', async ({ page }) => {
    //login
    const username = details[2].username;
    const projectName = 'Automation Sites';
    const siteName = 'Client Tools Inc.';

    const poManager = new POManager(page);
    await poManager.getLoginPage().goTo();
    await poManager.getLoginPage().validLogin(details[2].email, details[2].password);
    await page.waitForLoadState('networkidle');

    //validate account level
    await poManager.getAccountOverviewPage().selectAccount(username);
    const accountLevelUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Account Level Url : ' + accountLevelUrl);
    expect(accountLevelUrl).toContain('account');
    await poManager.getAccountOverviewPage().validateAccountUiTitle();
    var breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual(username);

    //validate project dashboard
    await poManager.getProjectListingsPage().clickOnProjectByName(projectName);
    await poManager.getCommonPage().validateUiCaption(projectName);
    const projectDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Project Dashboard Url : ' + projectDashboardUrl);
    expect(projectDashboardUrl).toContain('projects');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toContain(projectName);

    //validate site dashboard
    await poManager.getSiteListingsPage().clickOnSite();
    await poManager.getCommonPage().validateUiCaptionInsideFrame('Dashboard');
    //await poManager.getSiteListingsPage().clickOnSiteByName('Client Tools Inc.');
    const siteDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Site Dashboard Url : ' + siteDashboardUrl);
    expect(siteDashboardUrl).toContain("site\/dashboard");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect(breadcrumb).toEqual('Dashboard');

    //validate data sources
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataSources();
    await poManager.getCommonPage().validateUiCaption('Data Sources');
    const dataSourcesUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Datasources Url : ' + dataSourcesUrl);
    expect(dataSourcesUrl).toContain("configure-dataflow\/import");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual('Data Sources');

    //validate data view
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataView();
    await poManager.getCommonPage().validateUiCaption('Data View');
    const dataViewUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Data View Url : ' + dataViewUrl);
    expect(dataViewUrl).toContain('data-view');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual('Data View');

    //validate dataflow
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataFlow();
    await poManager.getCommonPage().validateUiCaption('Dataflow');
    const dataFlowUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Dataflow Url : ' + dataFlowUrl);
    expect(dataFlowUrl).toContain('dataflow');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual('Dataflow');

    //validate exports a/b
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openExportAB();
    await poManager.getCommonPage().validateUiCaption('Exports for ' + siteName);
    const exportABUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Exports A/B Url : ' + exportABUrl);
    expect(exportABUrl).toContain('export');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect(breadcrumb).toEqual('Exports A/B');
});