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
        this.emailInput().type(email,{force: true});
        this.fullnameInput().type(fullname,{force: true});
        this.passwordInput().type(password,{force: true});
        this.termsConditionsCheckbox().click({force: true});
        this.createAccountBtn().dblclick({force: true}); 
     }

     fillSignUpWithInvalidPassword(wrongpassword){
        this.navigate(); 
        this.signUpBtn().click({force: true});
        this.passwordInput().type(wrongpassword,{force: true});
        this.createAccountBtn().click({force: true});
     }

     fillSignUpWithEmptyCredentials(){
        this.navigate();
        this.signUpBtn().click({force: true});
        this.createAccountBtn().click({force: true});
     }

     clickSignUpWithLogInLinkButton(){
        this.navigate();
        this.signUpBtn().click({force: true});
        this.signUpLogInLinkBtn().click({force: true});
     }
    
}
module.exports = new SignUpPage();
