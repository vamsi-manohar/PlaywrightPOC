import { test, expect, Page } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

const details = JSON.parse(JSON.stringify(require('../pageobjects/testdata/logindetails.json')));

test('Smoke Test Suite', async ({ page }) => {
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
    expect.soft(accountLevelUrl).toContain('account');
    await poManager.getAccountOverviewPage().validateAccountUiTitle();
    var breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual(username);

    //validate project dashboard
    await poManager.getProjectListingsPage().clickOnProjectByName(projectName);
    await poManager.getCommonPage().validateUiCaption(projectName);
    const projectDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Project Dashboard Url : ' + projectDashboardUrl);
    expect.soft(projectDashboardUrl).toContain('projects');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toContain(projectName);

    //validate site dashboard
    await poManager.getSiteListingsPage().clickOnSite();
    await poManager.getCommonPage().validateUiCaptionInsideFrame('Dashboard');
    //await poManager.getSiteListingsPage().clickOnSiteByName('Client Tools Inc.');
    const siteDashboardUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Site Dashboard Url : ' + siteDashboardUrl);
    expect.soft(siteDashboardUrl).toContain("site\/dashboard");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect.soft(breadcrumb).toEqual('Dashboard');

    //validate data map
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataMap();
    await poManager.getCommonPage().validateUiCaption('Data Map');
    const dataMapUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Data Map Url : ' + dataMapUrl);
    expect.soft(dataMapUrl).toContain("data-map");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Data Map');

    //validate authentication
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openAuthentication();
    await poManager.getCommonPage().validateUiCaption('Authentication');
    const authenticationUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Authentication Url : ' + dataMapUrl);
    expect.soft(authenticationUrl).toContain("authentications");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Authentication');

    //validate data sources
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataSources();
    await poManager.getCommonPage().validateUiCaption('Data Sources');
    const dataSourcesUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Datasources Url : ' + dataSourcesUrl);
    expect.soft(dataSourcesUrl).toContain("configure-dataflow\/import");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Data Sources');

    //validate data services
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataServices();
    await poManager.getCommonPage().validateUiCaption('Data Services');
    const dataServicesUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Data Services Url : ' + dataServicesUrl);
    expect.soft(dataServicesUrl).toContain("services");
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Data Services');

    //validate exports a/b
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openExportAB();
    await poManager.getCommonPage().validateUiCaption('Exports for ' + siteName);
    const exportABUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Exports A/B Url : ' + exportABUrl);
    expect.soft(exportABUrl).toContain('export');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Exports A/B');

    //validate designer
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDesigner();
    await poManager.getCommonPage().validateUiCaption('Image Designer');
    const designerUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Designer Url : ' + designerUrl);
    expect.soft(designerUrl).toContain('designer');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Designer');

    //validate dataflow
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataFlow();
    await poManager.getCommonPage().validateUiCaption('Dataflow');
    const dataFlowUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Dataflow Url : ' + dataFlowUrl);
    expect.soft(dataFlowUrl).toContain('dataflow');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Dataflow');

    //validate data view
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openDataView();
    await poManager.getCommonPage().validateUiCaption('Data View');
    const dataViewUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Data View Url : ' + dataViewUrl);
    expect.soft(dataViewUrl).toContain('data-view');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Data View');

    //validate lists
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openLists();
    await poManager.getCommonPage().validateUiCaptionInsideFrame('Lists');
    const listsUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Lists Url : ' + listsUrl);
    expect.soft(listsUrl).toContain('lists');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect.soft(breadcrumb).toEqual('Lists');

    //validate roi strategy
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openRoi();
    await poManager.getCommonPage().validateUiCaption('ROI Strategy');
    const roiUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Roi Strategy Url : ' + roiUrl);
    expect.soft(roiUrl).toContain('strategy');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('ROI Strategy');

    //validate reporting
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openReporting();
    await poManager.getCommonPage().validateUiCaption('Reporting for ' + siteName);
    const reportUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Reporting Url : ' + reportUrl);
    expect.soft(reportUrl).toContain('reporting');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Reporting');

    //validate error log
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openErrorLog();
    await poManager.getCommonPage().validateUiCaption('Error Log');
    const errorLogUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Error Log Url : ' + errorLogUrl);
    expect.soft(errorLogUrl).toContain('error');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Error Log');

    //validate monitor
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openMonitor();
    await poManager.getCommonPage().validateUiCaptionInsideFrame('Monitor');
    const monitorUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Monitor Url : ' + monitorUrl);
    expect.soft(monitorUrl).toContain('monitor');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect.soft(breadcrumb).toEqual('Monitor');

    //validate activity
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openActivity();
    await poManager.getActivityPage().validateUiCaptionInsideFrame('Activity');
    const activityUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Activity Url : ' + activityUrl);
    expect.soft(activityUrl).toContain('activity');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbTextInsideFrame();
    expect.soft(breadcrumb).toEqual('Activity');

    //validate tracking
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openTracking();
    await poManager.getCommonPage().validateUiCaption('Tracking');
    const trackingUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Tracking Url : ' + trackingUrl);
    expect.soft(trackingUrl).toContain('tracking');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Tracking');

    //validate site settings
    await poManager.getCommonPage().hoverOnPupLogo();
    await poManager.getCommonPage().openSettings();
    await poManager.getCommonPage().validateUiCaption('Settings');
    const settingsUrl = await poManager.getCommonPage().getCurrentPageUrl();
    console.log('Settings Url : ' + settingsUrl);
    expect.soft(settingsUrl).toContain('site\/edit');
    breadcrumb = await poManager.getCommonPage().getLastBreadCrumbText();
    expect.soft(breadcrumb).toEqual('Settings');
});