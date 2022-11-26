import LogInPage from "../../pageobjects/LogIn.page"
import MainPage from "../../pageobjects/MainPage.page"

beforeEach(() => {
  const mainPage = new MainPage();
  mainPage.visitUrl();
})

describe('Telnyx Login Test', () => {
  const loginPage = new LogInPage();
  it('Should LogIn with valid credentials', () => {
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
    loginPage.clickLogInBtn();
    loginPage.fillEmail(Cypress.env('Email'));
    loginPage.fillPassword(Cypress.env('Password'));
    loginPage.clickSubmitBtn();
    loginPage.logInError.should('be.visible');
  })

  it('Should LogIn with invalid password with 4 symbols', () => {
    loginPage.clickLogInBtn();
    loginPage.fillEmail(Cypress.env('Email'));
    loginPage.fillPassword(Cypress.env('WrongPasswordWithFourSymbols'));
    loginPage.clickSubmitBtn();
    loginPage.logInError.should('be.visible');
  })

  it('Should LogIn with empty credentials', () => {
    loginPage.logInWithEmptyCredentials();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn false company email without @ in Single Sign-On', () => {
    loginPage.fillCompanyEmail(Cypress.env('CompanyEmailWithout@'));
    loginPage.logInErrorRequestNotFound.should('be.visible');
  })

  it('Should LogIn false business name with four numbers in Single Sign-On', () => {
    loginPage.fillBusinessName(Cypress.env('BusinessNameWithFourNumbers'));
    loginPage.logInErrorRequestNotFound.should('be.visible');
  })

})