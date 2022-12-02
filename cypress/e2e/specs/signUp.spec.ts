import SignUpPage from "../../pageobjects/SignUp.page";
import LogInPage from "../../pageobjects/LogIn.page"
import MainPage from "../../pageobjects/MainPage.page"

const invalidPasswordToLowerCase="dfffg1QzBBBqq";

describe('Telnyx Signup Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

    it('Should SignUp with valid credentials', () => {
        MainPage.clickAcceptCookiesBtn();
        SignUpPage.clickSignUpBtn();
        SignUpPage.fillEmail(SignUpPage.email);
        SignUpPage.fillFullname(SignUpPage.fullname);
        SignUpPage.fillPassword( SignUpPage.password)
        SignUpPage.clickTermAndConditionsCheckbox();
        SignUpPage.clickCreateAccountBtn();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with invalid password to lower case', () => {
        SignUpPage.clickSignUpBtn();
        SignUpPage.fillPassword(invalidPasswordToLowerCase);
        SignUpPage.clickTermAndConditionsCheckbox();
        SignUpPage.clickCreateAccountBtn();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with empty credentials', () => {
        SignUpPage.signUpWithEmptyCredentials();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with LogIn link button ', () => {
        SignUpPage.clickSignUpBtn();
        SignUpPage.clickSignUpLogInLinkBtn();
        LogInPage.fillEmail(Cypress.env('Email'));
        LogInPage.fillPassword(Cypress.env('Password'));
        LogInPage.clickSubmitBtn();
        LogInPage.logInError.should('be.visible');
      })
})
