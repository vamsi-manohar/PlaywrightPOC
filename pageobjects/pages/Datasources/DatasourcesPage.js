const { expect } = require("@playwright/test");
const { POManager } = require("../../POManager");
const { BasicUIActions } = require("../BasicUIActions").default;
class DatasourcesPage{



    constructor(page)
    {
        this.page=page;
        this.addDatasourceBtn=page.locator("span:has-text('Add Data Source')");
        this.searchDatasourceBox=page.locator("input[ng-model*='search']");
        this.searchIcon=page.locator("i[class*='search']");
        this.availableDatasources=page.locator("div[class='import-box ng-scope']");

        this.continueBtn=page.locator("a[class*='primary']");
        this.streamDropdown=page.locator("#import_stream");
        this.saveDatasourceBtn=page.locator("#js-addImport");

        this.datasourceSettingsIcon=page.locator("div[class*='pull'] a");
        this.radioButtons=page.locator("input[type='radio'][name='content']");
        this.importButton=page.locator("button:has-text('Import')");
        this.importRunning=page.locator("pup-icon[path*='refresh']");

        


    }



    async addDatasource()
    {
        await this.addDatasourceBtn.click();
        //await this.page.waitForLoadState('networkidle');
        return this;
    }

    async searchDatasource(name)
    {
        await this.searchDatasourceBox.type(name);
        return this;
    }

    async selectDatasourceAndAdd(datasource)
    {
        console.log("Entered into select datasource method")
        expect(this.availableDatasources.first()).toBeVisible();
       const count =await this.availableDatasources.count();
       console.log(count);
       for(let i=0;i<count;i++)
       {
         console.log("Entered into for loop")
        const datasources = await this.availableDatasources.nth(i).locator("strong").textContent();
        console.log(datasources)
        if(datasources.includes("Productsup Stream API"))
         {
            await this.availableDatasources.nth(i).locator("button[class*='success']").click();
            break;
         }
       } 

       await this.continueBtn.click();
       await this.page.waitForLoadState('networkidle');
       return this;
      
    }

    async selectStreamID(id)
    {
        const option= this.streamDropdown;
        await option.selectOption(id);
        return this;
    }


    async saveDatasource()
    {
        await this.saveDatasourceBtn.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.pause();
        return this;
    }



    async configureAdditionalDatasource()
    {
        await this.datasourceSettingsIcon.last().click();
        await this.page.waitForLoadState('networkidle');
        await this.radioButtons.last().click();
        await expect(this.radioButtons.last()).toBeChecked();
        await this.page.pause();
    }


    async triggerPlatformAction()
    {
        await this.importButton.click();
       // await expect(this.importRunning).toBeVisible();
       await this.page.waitForLoadState('networkidle')
       await expect(this.importRunning).toHaveCount(0);
       
    }
}




module.exports = {DatasourcesPage}