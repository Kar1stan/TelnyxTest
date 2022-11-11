
export class SignUpPage{
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
    }

    createAccountBtn(){
     return cy.get("button[type='submit']")
    }

    signUpLogInLinkBtn(){
     return cy.xpath("//a[text()='Log in']")
    }

    email(){
        return Math.random().toString(36).substring(2,8) + "@mail.com";
    }

    fullname(){
        return Math.random().toString(36).substring(2,8);
    }

    password(){
        return Math.random().toString(36).substring(2,9);
    }


     clickSignUpBtn(){
      this.signUpBtn().click();
     }

     fillEmail(email:string){
      this.emailInput().type(email);
      this.createAccountBtn().dblclick();
     }

     fillFullname(fullname:string){
      this.fullnameInput().type(fullname);
     }

     clickTermAndConditionsCheckbox(){
      this.termsConditionsCheckbox().click();
     }

     fillPassword(password:string){
      this.passwordInput().type(password);
     }

     clickCreateAccountBtn(){
      this.createAccountBtn().dblclick();
     }

     signUpWithEmptyCredentials(){
      this.signUpBtn().click();
      this.createAccountBtn().click();
     }

     signUpWithLogInLinkButton(){
      this.signUpBtn().click();
      this.signUpLogInLinkBtn().click();
     }
    
}