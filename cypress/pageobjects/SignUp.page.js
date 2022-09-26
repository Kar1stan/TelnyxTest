require("cypress-xpath")

class SignUpPage{
    navigate() {
     return cy.visit('https://telnyx.com/')
    }
    acceptCloseBtn(){
     return cy.xpath("//button[text()='Accept and close']")
    }
    signUpBtn(){
     return cy.get("header>div~div>div>ul>div>a")
    }
    emailInput(){
     return cy.get("#email")
    }
    fullnameInput(){
     return cy.get("#full_name")
    }
    passwordInput(){
     return cy.get("#password")
    }
    termsConditionsCheckbox(){
     return cy.get("div[aria-labelledby='terms-label']")
     //it's not an actual checkbox because it has display:none attribute it's the parent element
    }
    createAccountBtn(){
     return cy.get("button[type='submit']")
    }
    signUpLogInLinkBtn(){
     return cy.xpath("//a[text()='Log in']")
    }
    
    fillSignUpWithValidCredentials(email,fullname,password){
        this.navigate();
        this.acceptCloseBtn().click();
        this.signUpBtn().click();
        this.emailInput().type(email);
        this.fullnameInput().type(fullname);
        this.passwordInput().type(password);
        this.termsConditionsCheckbox().click();
        this.createAccountBtn().dblclick(); 
     }

     fillSignUpWithInvalidPassword(wrongpassword){
        this.navigate(); 
        this.acceptCloseBtn().click();
        this.signUpBtn().click();
        this.passwordInput().type(wrongpassword);
        this.createAccountBtn().click();
     }

     fillSignUpWithEmptyCredentials(){
        this.navigate();
        this.acceptCloseBtn().click();
        this.signUpBtn().click();
        this.createAccountBtn().click();
     }

     clickSignUpWithLogInLinkButton(){
        this.navigate();
        this.acceptCloseBtn().click();
        this.signUpBtn().click();
        this.signUpLogInLinkBtn().click();
     }
    
}
module.exports = new SignUpPage();
