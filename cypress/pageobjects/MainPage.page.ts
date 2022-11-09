
export class MainPage {
    cookiesAcceptBtn(){
        return cy.xpath("//button[text()='Accept and close']")
    }

    clickAcceptCookiesBtn(){
       this.cookiesAcceptBtn().click();
    }

    goto(){
        cy.visit("/");
    }

}