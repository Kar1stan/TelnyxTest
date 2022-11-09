import {SignUpPage} from "../../pageobjects/SignUp.page";
import {LogInPage} from "../../pageobjects/LogIn.page"
import {MainPage} from "../../pageobjects/MainPage.page"

beforeEach(() => {
  const mainPage = new MainPage();
  mainPage.goto();
})

describe('Telnyx Signup Test', () => {
    it('Should SignUp with valid credentials', () => {
        const signupPage = new SignUpPage();
        const mainPage = new MainPage();
        mainPage.clickAcceptCookiesBtn();
        signupPage.clickSignUpBtn();
        signupPage.fillSignUpEmail(signupPage.email());
        signupPage.fillSignUpFullname(signupPage.fullname());
        signupPage.fillSignUpPassword(signupPage.password());
        signupPage.clickTermAndConditionsCheckbox();
        signupPage.clickCreateAccountBtn();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with invalid password', () => {
        const signupPage = new SignUpPage();
        signupPage.signUpWithInvalidPassword("dfffg1QzBBBqq");
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with empty credentials', () => {
        const signupPage = new SignUpPage();
        signupPage.signUpWithEmptyCredentials();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with LogIn link button ', () => {
        const signupPage = new SignUpPage();
        const loginPage = new LogInPage();
        signupPage.signUpWithLogInLinkButton();
        loginPage.fillLogInEmail(Cypress.env('email'));
        loginPage.fillLogInPassword(Cypress.env('password'));
        loginPage.clickSubmitBtn();
        loginPage.logInError().should('be.visible');
      })
})