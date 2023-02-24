import { expect, Page } from "@playwright/test";

class CommonPage {
    constructor(page) {
        this.page = page;

        const framePage = this.page.frameLocator("//iframe[@id='frame']");
        this.pupLogo = this.page.locator('#logo-inverse');
        this.dataView = this.page.locator("//span[@class='title'][normalize-space()='Data View']");
        this.dataflow = this.page.locator("//span[@class='title'][normalize-space()='Dataflow']");
        this.exportAB = this.page.locator("//span[normalize-space()='Exports A/B']");
        this.dataSources = this.page.locator("//span[@class='title'][normalize-space()='Data Sources']");
        this.uiCaption = this.page.locator("span[class='caption']");
        this.uiCaptionInsideFrame = framePage.locator("span[class='caption']");

        this.breadcrumbs = this.page.locator('pup-breadcrumbs pup-link a span'); //this.page.locator("pup-link span");
        this.frameBreadCrumbs = framePage.locator('pup-breadcrumbs pup-link a span');
    }

    async hoverOnPupLogo() {
        await this.pupLogo.hover();
    }

    async openDataSources() {
        await this.dataSources.click();
        await this.page.waitForTimeout(5000);
    }

    async openDataView() {
        await this.dataView.click();
        await this.page.waitForTimeout(5000);
    }

    async openDataFlow() {
        await this.dataflow.click();
        await this.page.waitForTimeout(5000);
    }

    async openExportAB() {
        await this.exportAB.click();
        await this.page.waitForTimeout(5000);
    }

    async validateUiCaption(caption) {
        await this.page.waitForLoadState('networkidle');
        console.log(caption + ' UI Title : ' + await this.uiCaption.innerText());
        expect.soft(await this.uiCaption.innerText()).toEqual(caption);
    }

    async validateUiCaptionInsideFrame(caption) {
        await this.page.waitForLoadState('networkidle');
        var uiTitle = await this.uiCaptionInsideFrame.nth(0).innerText();
        console.log(caption + ' UI Title : ' + uiTitle);
        expect.soft(uiTitle).toEqual(caption);
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

    async getLastBreadCrumbText() {
        const elementsCount = await this.breadcrumbs.count();
        const breadcrumb = await this.breadcrumbs.nth(elementsCount - 1).innerText();
        console.log('Page breadcrumb : ' + breadcrumb);
        return breadcrumb;
    }

    async getLastBreadCrumbTextInsideFrame() {
        const elementsCount = await this.frameBreadCrumbs.count();
        const breadcrumb = await this.frameBreadCrumbs.nth(elementsCount - 1).innerText();
        console.log('Page breadcrumb : ' + breadcrumb);
        return breadcrumb;
    }

    async getCurrentPageUrl() {
        await this.page.waitForLoadState('networkidle');
        return this.page.url();
    }
}

export default { CommonPage };