require("cypress-xpath")

class SignUpPage{
    navigate() {
     return cy.visit('https://telnyx.com/')
    }
    clickAcceptCloseBtn(){
      return cy.xpath("//button[text()='Accept and close']")
    }
    clickSignUpBtn(){
     return cy.get("header>div~div>div>ul>div>a")
    }
    fillEmailInput(){
     return cy.get("#email")
    }
    fillFullnameInput(){
     return cy.get("#full_name")
    }
    fillPasswordInput(){
     return cy.get("#password")
    }
    clickTermsConditionsCheckbox(){
     return cy.get("div[aria-labelledby='terms-label']")
     //it's not an actual checkbox because it has display:none attribute it's the parent element
    }
    clickCreateAccountBtn(){
     return cy.get("button[type='submit']")
    }
    clickSignUpLogInLinkBtn(){
     return cy.xpath("//a[text()='Log in']")
    }

    signUpWithValidCredentials(email,fullname,password){
        this.navigate();
        this.clickAcceptCloseBtn().click();
        this.clickSignUpBtn().click();
        this.fillEmailInput().type(email);
        this.fillFullnameInput().type(fullname);
        this.fillPasswordInput().type(password);
        this.clickTermsConditionsCheckbox().click();
        this.clickCreateAccountBtn().dblclick();
     }

     signUpWithInvalidPassword(wrongpassword){
        this.navigate();
        this.clickAcceptCloseBtn().click();
        this.clickSignUpBtn().click();
        this.fillPasswordInput().type(wrongpassword);
        this.clickCreateAccountBtn().click();
     }

     signUpWithEmptyCredentials(){
        this.navigate();
        this.clickAcceptCloseBtn().click();
        this.clickSignUpBtn().click();
        this.clickCreateAccountBtn().click();
     }

     signUpWithLogInLinkButton(){
        this.navigate();
        this.clickAcceptCloseBtn().click();
        this.clickSignUpBtn().click();
        this.clickSignUpLogInLinkBtn().click();
     }
    
}
module.exports = new SignUpPage();
