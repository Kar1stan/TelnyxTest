require("cypress-xpath")

class LogInPage {
    navigate(){
     return cy.visit('https://telnyx.com/')
    }
    logInBtn(){
     return cy.xpath("//*[@id='__next']/div[1]/header/div[1]/div/div/a[2]")
     //I have tried search from the nearest id dialogAudio but that didn't work 
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
    logInErrorConfirmEmail(){
     return cy.get("div[type='error']")
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
     //it's another error but div has not any other selector-usable trait except type,class is a computer fiction
    }

    clickLogInSignUpLinkBtn(email,password){
        this.emailInput().type(email);
        this.passwordInput().type(password);
        this.submitBtn().click();
    }

    fillLogInWithValidCredentials(email,password){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.emailInput().type(email);
        this.passwordInput().type(password);
        this.submitBtn().click();
    }

    fillLogInWithInvalidPassword(email,password){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.emailInput().type(email);
        this.passwordInput().type(password);
        this.submitBtn().click();
    }

    fillLogInWithEmptyCredentials(){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.SubmitBtn().click();
    }

     fillLogInCompanyEmail(falsemail){
        this.navigate();
        this.logInBtn().click({ force: true })
        this.singleSignOnBtn().click();
        this.companyEmailInput().type(falsemail);
        this.continueBtn().click();
    }

     fillLogInBusinessName(falsename){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.singleSignOnBtn().click();
        this.companyNameBtn().click();
        this.businessNameInput().type(falsename);
        this.continueBtn().click();
    }
}
module.exports = new LogInPage();
