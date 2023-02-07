const { LoginPage } = require("./LoginPage");
const { AccountOverviewPage } = require("./pages/AccountOverviewPage");
const { BasicUIActions } = require("./pages/BasicUIActions").default;
const { DatasourcesPage } = require("./pages/Datasources/DatasourcesPage");
const {ProjectsListingsPage} = require("./pages/Projects/ProjectsListingsPage");
const { SiteListingsPage } = require("./pages/Sites/SiteListingsPage");

class POManager
{
    constructor(page)
    {
        this.page=page;
        this. loginPage= new LoginPage(this.page);
        this.accountOverviewPage= new AccountOverviewPage(this.page);
        this.projectListingsPage=new ProjectsListingsPage(this.page);
        this.siteListingsPage=new SiteListingsPage(this.page);
        this.datasourcesPage=new DatasourcesPage(this.page);
        this.basicUIActions = new BasicUIActions(this.page);
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
}

module.exports = {POManager};