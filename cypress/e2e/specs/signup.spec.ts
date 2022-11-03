import {SignUpPage} from "../../pageobjects/SignUp.page";
import {LogInPage} from "../../pageobjects/LogIn.page"
import {MainPage} from "../../pageobjects/MainPage.page"

beforeEach(() => {
  cy.visit("/");
})

describe('Telnyx Signup Test', () => {
    it('Should SignUp with valid credentials', () => {
        const signupPage = new SignUpPage();
        const mainPage = new MainPage();
        mainPage.clickAcceptCookiesBtn();
        signupPage.clickSignUpBtn();
        signupPage.fillSignUpEmail("vyter34@gmail.com");
        signupPage.fillSignUpFullname("VedminMer");
        signupPage.fillSignUpPassword("%P*vv.8f2wh*56k");
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
        loginPage.fillLogInEmail('foloxov@gmail.com');
        loginPage.fillLogInPassword('ZpPQ_q!!u#Lz6PZ');
        loginPage.clickSubmitBtn();
        loginPage.logInError().should('be.visible');
      })
})