class LoginPage {


    constructor(page)
    {
        this.page = page;
        const framePage = this.page.frameLocator("#frame");
        this.username = framePage.locator("input[name='username']");
        this.nextButton = framePage.locator("button:has-text('Next')");
        this.password = framePage.locator("input[name*='password']");
        this.loginButton = framePage.locator("button:has-text('Log In')");
    }




    async goTo()
    {
        await this.page.goto("https://platform.productsup.com/login");
        return this;
    }

    async validLogin(usernameData,passwordData)
    {


           await this.username.type(usernameData);
           await this.nextButton.click();
           await this.password.type(passwordData);
           await this.loginButton.click();
           await this.page.waitForLoadState('networkidle')
        

    }

    async getAccountDashboardPageTitle()
    {
        const title = await this.pageCaption.textContent();
        return title;
     
    }




}

export default { LoginPage };