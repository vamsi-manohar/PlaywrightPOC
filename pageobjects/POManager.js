const { LoginPage } = require("./LoginPage").default;
const { AccountOverviewPage } = require("./pages/AccountOverviewPage").default;
const { CommonPage } = require("./pages/CommonPage").default;
const { BasicUIActions } = require("./pages/BasicUIActions").default;
const { ActivityPage } = require("./pages/ActivityPage").default;
const { DatasourcesPage } = require("./pages/Datasources/DatasourcesPage");
const { DataViewPage } = require("./pages/DataViewPage").default;
const {ProjectsListingsPage} = require("./pages/Projects/ProjectsListingsPage");
const { SiteListingsPage } = require("./pages/Sites/SiteListingsPage").default;

class POManager
{
    constructor(page)
    {
        this.page=page;
        this.loginPage= new LoginPage(this.page);
        this.accountOverviewPage= new AccountOverviewPage(this.page);
        this.projectListingsPage=new ProjectsListingsPage(this.page);
        this.siteListingsPage=new SiteListingsPage(this.page);
        this.datasourcesPage=new DatasourcesPage(this.page);
        this.basicUIActions = new BasicUIActions(this.page);
        this.commonPage = new CommonPage(this.page);
        this.dataViewPage = new DataViewPage(this.page);
        this.activityPage = new ActivityPage(this.page);
    }



    getLoginPage()
    {
        return this.loginPage;
    }

    getAccountOverviewPage()
    {
        return this.accountOverviewPage;
    }

    getProjectListingsPage()
    {
        return this.projectListingsPage;
    }


    getSiteListingsPage()
    {
        return this.siteListingsPage;
    }

    getDatasourcesPage()
    {
        return this.datasourcesPage;
    }

    getUIActions()
    {
        return this.basicUIActions;
    }

    getCommonPage() {
        return this.commonPage;
    }

    getDataViewPage() {
        return this.dataViewPage;
    }

    getActivityPage() {
        return this.activityPage;
    }
}

module.exports = {POManager};