
export default class SignUpPage{
    get signUpBtn(){
     return cy.get("header>div~div>div>ul>div>a")
    }

    get emailInput(){
     return cy.get("#email")
    }

    get fullnameInput(){
     return cy.get("#full_name")
    }

    get passwordInput(){
     return cy.get("#password")
    }

    get termsConditionsCheckbox(){
     return cy.get("div[aria-labelledby='terms-label']")
    }

    get createAccountBtn(){
     return cy.get("button[type='submit']")
    }

    get signUpLogInLinkBtn(){
     return cy.xpath("//a[text()='Log in']")
    }

    get email(){
     return Math.random().toString(36).substring(2,8) + "@mail.com";
    }

    get fullname(){
     return Math.random().toString(36).substring(2,8);
    }

    get password(){
     return Math.random().toString(36).substring(2,9);
    }


     clickSignUpBtn(){
      this.signUpBtn.click();
     }

     fillEmail(email:string){
      this.emailInput.type(email);
      this.createAccountBtn.dblclick();
     }

     fillFullname(fullname:string){
      this.fullnameInput.type(fullname);
     }

     clickTermAndConditionsCheckbox(){
      this.termsConditionsCheckbox.click();
     }

     fillPassword(password:string){
      this.passwordInput.type(password);
     }

     clickCreateAccountBtn(){
      this.createAccountBtn.dblclick();
     }

     signUpWithEmptyCredentials(){
      this.signUpBtn.click();
      this.createAccountBtn.click();
     }

     signUpWithLogInLinkButton(){
      this.signUpBtn.click();
      this.signUpLogInLinkBtn.click();
     }
    
}
