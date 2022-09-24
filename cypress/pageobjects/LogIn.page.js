require("cypress-xpath")

class LogInPage {
    navigate(){
     return cy.visit('https://telnyx.com/')
    }
    logInBtn(){
     return cy.xpath("//*[@id='__next']/div[1]/header/div[1]/div/div/a[2]")
     //I have tried search from the nearest id dialogAudio but that didn't work 
    }
    fillEmailInput(){
     return cy.get("form>div>div>label>span~div>div>input[name='email']")
    }
    fillPasswordInput(){
     return cy.get("input[name='password']")
    }
    clickSubmitBtn(){
     return cy.xpath("//button[text()='Log in']")
    }
    logInErrorConfirmEmail(){
     return cy.get("div[type='error']")
    }
    clickSingleSignOnBtn(){
     return cy.xpath("//button[text()='Single Sign-On']")
    }
    fillBusinessNameInput(){
     return cy.get("input[name='short_name']")
    }
    fillCompanyEmailInput(){
     return cy.get("input[placeholder='e.g. jane@acme.com']")
    }
    clickContinueBtn(){
     return cy.xpath("//button[text()='Continue']")
    }
    clickCompanyNameBtn(){
     return cy.xpath("//button[text()='company name']")
    }
    logInErrorRequestNotFound(){
     return cy.get("div[type='error']")
     //it's another error but div has not any other selector-usable trait except type,class is a computer fiction
    }

    logInSignUpLinkBtn(email,password){
        this.fillEmailInput().type(email);
        this.fillPasswordInput().type(password);
        this.clickSubmitBtn().click();
    }

    logInWithValidCredentials(email,password){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.fillEmailInput().type(email);
        this.fillPasswordInput().type(password);
        this.clickSubmitBtn().click();
    }

    logInWithInvalidPassword(email,password){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.fillEmailInput().type(email);
        this.fillPasswordInput().type(password);
        this.clickSubmitBtn().click();
    }

    logInWithEmptyCredentials(){
        this.navigate();
        this.lofInBtn().click({ force: true });
        this.clickSubmitBtn().click();
    }

     logInCompanyEmail(falsemail){
        this.navigate();
        this.logInBtn().click({ force: true })
        this.clickSingleSignOnBtn().click();
        this.fillCompanyEmailInput().type(falsemail);
        this.clickContinueBtn().click();
    }

     logInBusinessName(falsename){
        this.navigate();
        this.logInBtn().click({ force: true });
        this.clickSingleSignOnBtn().click();
        this.fillCompanyNameBtn().click();
        this.fillBusinessNameInput().type(falsename);
        this.clickContinueBtn().click();
    }
}
module.exports = new LogInPage();