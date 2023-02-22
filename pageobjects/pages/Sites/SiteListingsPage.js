const {expect} = require('@playwright/test');
class SiteListingsPage{



    constructor(page)
    {
        this.page=page;
        this.addSiteBtn=page.locator("span:has-text('Add Site')");
        this.siteNameTextBox=page.locator("#domain");
        this.saveSiteBtn=page.locator("#js-save-site");
        this.siteUrls = page.locator('tr td a');

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
        //console.log('site name : ' + await this.page.locator(xpath).innerText());
        await this.page.locator(xpath).click();
    }

    async clickOnSite() {
        //await this.page.waitForLoadState('networkidle');
        await this.siteUrls.nth(1).click();
        await this.page.waitForTimeout(5000);
        //await this.page.waitForLoadState('networkidle');
    }
}

export default { SiteListingsPage };