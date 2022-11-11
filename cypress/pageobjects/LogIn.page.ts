
export class LogInPage {
    logInBtn(){
     return cy.xpath("//*[@id='__next']/div[1]/header/div[1]/div/div/a[2]") 
    }

    emailInput(){
     return cy.get("form>div>div>label>span~div>div>input[name='email']")
    }

    passwordInput(){
     return cy.get("input[name='password']")
    }

    submitBtn(){
     return cy.xpath("//button[text()='Log in']")
    }

    logInError(){
     return cy.get("div[type='error']",{ timeout: 5000 })
    }

    singleSignOnBtn(){
     return cy.xpath("//button[text()='Single Sign-On']")
    }

    businessNameInput(){
     return cy.get("input[name='short_name']")
    }

    companyEmailInput(){
     return cy.get("input[placeholder='e.g. jane@acme.com']")
    }

    continueBtn(){
     return cy.xpath("//button[text()='Continue']")
    }

    companyNameBtn(){
     return cy.xpath("//button[text()='company name']")
    }

    logInErrorRequestNotFound(){
     return cy.get("div[type='error']")
    }

    clickLogInBtn(){
        this.logInBtn().click();
    }

    fillEmail(email:string){
        this.emailInput().type(email);
    }

    fillPassword(password:string){
        this.passwordInput().type(password);
    }

    clickSubmitBtn(){
        this.submitBtn().click();
    }

    logInWithEmptyCredentials(){
        this.logInBtn().click();
        this.submitBtn().click();
    }

     fillCompanyEmail(falsemail:string){
        this.logInBtn().click()
        this.singleSignOnBtn().click();
        this.companyEmailInput().type(falsemail);
        this.continueBtn().click();
    }

     fillBusinessName(falsename:string){
        this.logInBtn().click();
        this.singleSignOnBtn().click();
        this.companyNameBtn().click();
        this.businessNameInput().type(falsename);
        this.continueBtn().click();
    }
}