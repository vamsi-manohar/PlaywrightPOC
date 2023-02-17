const {expect} = require('@playwright/test');
class SiteListingsPage{



    constructor(page)
    {
        this.page=page;
        this.addSiteBtn=page.locator("span:has-text('Add Site')");
        this.siteNameTextBox=page.locator("#domain");
        this.saveSiteBtn=page.locator("#js-save-site");

    }


    async addNewSite(siteName)
    {
        await this.page.waitForLoadState('networkidle');
        await this.addSiteBtn.click();
        await this.siteNameTextBox.type(siteName);
        await this.saveSiteBtn.click();
        await this.page.waitForLoadState('networkidle');


    }

    async clickOnSiteByName(siteName) {
        const xpath = "//span[normalize-space()='" + siteName + "']";
        await this.page.locator(xpath).click();
    }
}

module.exports = {SiteListingsPage}