require("cypress-xpath")

class SignUpPage{
    navigate() {
     return cy.visit('https://telnyx.com/')
    }
    AcceptCloseBtn(){
     return cy.xpath("//button[text()='Accept and close']")
    }
    SignUpBtn(){
     return cy.get("header>div~div>div>ul>div>a")
    }
    EmailInput(){
     return cy.get("#email")
    }
    FullnameInput(){
     return cy.get("#full_name")
    }
    PasswordInput(){
     return cy.get("#password")
    }
    TermsConditionsCheckbox(){
     return cy.get("div[aria-labelledby='terms-label']")
     //it's not an actual checkbox because it has display:none attribute it's the parent element
    }
    CreateAccountBtn(){
     return cy.get("button[type='submit']")
    }
    SignUpLogInLinkBtn(){
     return cy.xpath("//a[text()='Log in']")
    }
    
    fillSignUpWithValidCredentials(email,fullname,password){
        this.navigate();
        cy.wait(1000)
        if(this.clickAcceptCloseBtn().should('be.visible'))
        {
             this.AcceptCloseBtn().click();
             this.SignUpBtn().click();
             this.EmailInput().type(email);
             this.FullnameInput().type(fullname);
             this.PasswordInput().type(password);
             this.TermsConditionsCheckbox().click();
             this.CreateAccountBtn().dblclick();
        }
        else
        {
        this.SignUpBtn().click();
        this.EmailInput().type(email);
        this.FullnameInput().type(fullname);
        this.PasswordInput().type(password);
        this.TermsConditionsCheckbox().click();
        this.CreateAccountBtn().dblclick();
        }
     }

     fillSignUpWithInvalidPassword(wrongpassword){
        this.navigate();
        if(this.AcceptCloseBtn().should('be.visible'))
        {
            this.AcceptCloseBtn().click();
        }
        else
        {
        this.SignUpBtn().click();
        this.PasswordInput().type(wrongpassword);
        this.CreateAccountBtn().click();
        }
     }

     signUpWithEmptyCredentials(){
        this.navigate();
        if(this.AcceptCloseBtn().should('be.visible'))
        {
            this.AcceptCloseBtn().click();
            this.SignUpBtn().click();
            this.CreateAccountBtn().click();
        }
        else
        {
        this.SignUpBtn().click();
        this.CreateAccountBtn().click();
        }
     }

     clickSignUpWithLogInLinkButton(){
        this.navigate();
        if(this.AcceptCloseBtn().should('be.visible'))
        {
            this.AcceptCloseBtn().click();
            this.SignUpBtn().click();
            this.SignUpLogInLinkBtn().click();
        }
        else
        {
        this.SignUpBtn().click();
        this.SignUpLogInLinkBtn().click();
        }
     }
    
}
module.exports = new SignUpPage();
