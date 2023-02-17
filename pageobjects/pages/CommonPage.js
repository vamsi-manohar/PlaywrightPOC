import { expect } from "@playwright/test";

class CommonPage {
    constructor(page) {
        this.page = page;
        const framePage = this.page.frameLocator('#frame');
        this.pupLogo = this.page.locator('#logo-inverse');
        this.dataView = this.page.locator("//span[@class='title'][normalize-space()='Data View']");
        this.uiCaption = this.page.locator("span[class='caption']");

        this.breadcrumbs = this.page.locator('pup-breadcrumbs pup-link a span'); //this.page.locator("pup-link span");
        this.frameBreadCrumbs = framePage.locator('pup-breadcrumbs pup-link a span');
    }

    async hoverOnPupLogo() {
        await this.pupLogo.hover();
    }

    async openDataView() {
        await this.dataView.click();
    }

    async validateUiCaption(caption) {
        console.log(caption + ' UI Title : ' + await this.uiCaption.innerText());
        expect(await this.uiCaption.innerText()).toEqual(caption);
    }

    async getBreadcrumbs() {
        console.log('breadcrumb size : ' + await this.breadcrumbs.count());
        
        const elementsCount = await this.breadcrumbs.count();
        console.log('elementsCount : ' + elementsCount);
        let texts = [];

        for (var index = 0; index < elementsCount; index++) {
            const element = await this.breadcrumbs.nth(index);
            const innerText = await element.innerText();
            texts.push(innerText);
        }

        for (var index = 0; index < elementsCount; index++) {
            console.log('breadcrumb : ' + texts[index]);
        }
        
    }
}

export default { CommonPage };