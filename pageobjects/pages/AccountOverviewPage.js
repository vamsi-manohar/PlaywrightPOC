const { expect } = require("@playwright/test");
const { ProjectsListingsPage } = require("./Projects/ProjectsListingsPage");

class AccountOverviewPage
{

    constructor(page)
    {
        this.page=page;
        this.accounts= page.locator("tr[ng-repeat*='account']");
    }


    async selectAccount(accountName)
    {
      
       const count =await this.accounts.count();
       for(let i=0;i<count;i++)
       {
        const accountDetails = await this.accounts.nth(i).locator("td a").textContent();
        if(accountDetails.includes(accountName))
         {
            await this.accounts.nth(i).locator("td a").click();
           
         }
       } 

       await this.page.waitForLoadState('networkidle');
      
    }

    
}


module.exports = {AccountOverviewPage};