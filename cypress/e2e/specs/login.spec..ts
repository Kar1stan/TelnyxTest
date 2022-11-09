import {LogInPage} from "../../pageobjects/LogIn.page"
import {MainPage} from "../../pageobjects/MainPage.page"

beforeEach(() => {
  const mainPage = new MainPage();
  mainPage.goto();
})

describe('Telnyx Login Test', () => {
  it('Should LogIn with valid credentials', () => {
    const loginPage = new LogInPage();
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
    loginPage.clickLogInBtn();
    loginPage.fillLogInEmail(Cypress.env('EMAIL'));
    loginPage.fillLogInPassword(Cypress.env('PASSWORD'));
    loginPage.clickSubmitBtn();
    loginPage.logInError().should('be.visible');
  })

  it('Should LogIn with invalid password with 4 symbols', () => {
    const loginPage = new LogInPage();
    loginPage.clickLogInBtn();
    loginPage.fillLogInEmail(Cypress.env('email'));
    loginPage.fillLogInPassword(Cypress.env('wrongpassword'));
    loginPage.clickSubmitBtn();
    loginPage.logInError().should('be.visible');
  })

  it('Should LogIn with empty credentials', () => {
    const loginPage = new LogInPage();
    loginPage.logInWithEmptyCredentials();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn false company email without @ in Single Sign-On', () => {
    const loginPage = new LogInPage();
    loginPage.logInCompanyEmail(Cypress.env('companyemail'));
    loginPage.logInErrorRequestNotFound().should('be.visible');
  })

  it('Should LogIn false business name with four symbols in Single Sign-On', () => {
    const loginPage = new LogInPage();
    loginPage.logInBusinessName(Cypress.env('businessname'));
    loginPage.logInErrorRequestNotFound().should('be.visible');
  })

})