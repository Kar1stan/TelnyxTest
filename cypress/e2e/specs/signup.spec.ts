import {SignUpPage} from "../../pageobjects/SignUp.page";
import {LogInPage} from "../../pageobjects/LogIn.page"
import {MainPage} from "../../pageobjects/MainPage.page"

const invalidPassword="dfffg1QzBBBqq";

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
        signupPage.fillEmail(signupPage.email());
        signupPage.fillFullname(signupPage.fullname());
        signupPage.fillPassword(signupPage.password());
        signupPage.clickTermAndConditionsCheckbox();
        signupPage.clickCreateAccountBtn();
        cy.url().should('eq','https://telnyx.com/sign-up');
      })
    
      it('Should SignUp with invalid password', () => {
        const signupPage = new SignUpPage();
        signupPage.clickSignUpBtn();
        signupPage.fillPassword(InvalidPassword);
        signupPage.clickTermAndConditionsCheckbox();
        signupPage.clickCreateAccountBtn();
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
        loginPage.fillEmail(Cypress.env('Email'));
        loginPage.fillPassword(Cypress.env('Password'));
        loginPage.clickSubmitBtn();
        loginPage.logInError().should('be.visible');
      })
})
