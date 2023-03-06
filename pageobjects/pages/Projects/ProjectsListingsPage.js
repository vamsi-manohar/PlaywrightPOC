const {expect} = require('@playwright/test');
class ProjectsListingsPage
{
    constructor(page)
    {
        this.page=page;
        
        this.accountBreadcrumb=page.locator("pup-link span");
        this.projectSearchField= page.locator("div[class*='search'] input[name='search']");
        this.projectsList=page.locator("table td a[class*='project']");
        this.projectSearchBtn=page.locator("i[class*='search']");
        this.visibleProject=page.locator("tr[class='cursor-pointer project-container ng-scope'] a");
        this.hiddenProjects=page.locator("tr[class*='ng-hide'] a");
        this.clearFiltersBtn=page.locator("span[ng-click*='reset']");
        this.hiddenProjectsNew=page.locator("tr[class*='ng-hide']");


        this.addProjectButton=page.locator("pup-icon[path*='plus']");
        this.projectNameTextBox=page.locator("#name");
        this.saveProjectBtn=page.locator("#js-save-project");

        this.availableProjects = page.locator("table td a[class*='project-name']");
    }


    async validateUserOnProjectListingsPage(username)
    {
        console.log('user name : ' + await this.accountBreadcrumb.innerText());
        await expect(this.accountBreadcrumb).toContainText(username);
       
    }


    async searchProjectAndSitesByName(name)
    {
         await this.projectSearchField.type(name);   
         await this.projectSearchBtn.click();
         await this.page.waitForLoadState('networkidle');
         await this.validateProjectSearch();
       
      
    
    }

     async validateProjectSearch()
    {
        await expect(this.visibleProject).toContainText("Services Demo");
        await expect(this.hiddenProjects).not.toHaveCount(0);
       
    }

    async validateClearFilters()
    {
        
       // await expect(this.hiddenProjectsNew).toHaveCount(1);
       
    }


    async clearFilters()
    {
        await this.clearFiltersBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.validateClearFilters();

      
     
    }

    async addNewProject(projectName)
    {
      await this.page.waitForLoadState('networkidle');
      await this.addProjectButton.click();
      await this.projectNameTextBox.type(projectName);
      await this.saveProjectBtn.click();

    }

    async clickOnProjectByName(projectName) {
        const xpath = "//span[normalize-space()='" + projectName + "']";
        await this.page.locator(xpath).click();
    }

}

module.exports = {ProjectsListingsPage}