import LogInPage from "../../pageobjects/LogIn.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Telnyx Login Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Should LogIn with valid credentials', () => {
    MainPage.clickAcceptCookiesBtn();
    LogInPage.clickLogInBtn();
    LogInPage.fillEmail(Cypress.env('Email'));
    LogInPage.fillPassword(Cypress.env('Password'));
    LogInPage.clickSubmitBtn();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn with invalid password with 4 symbols', () => {
    LogInPage.clickLogInBtn();
    LogInPage.fillEmail(Cypress.env('Email'));
    LogInPage.fillPassword(Cypress.env('WrongPasswordWithFourSymbols'));
    LogInPage.clickSubmitBtn();
     cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn with empty credentials', () => {
    LogInPage.logInWithEmptyCredentials();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn false company email without @ in Single Sign-On', () => {
    LogInPage.clickLogInBtn();
    LogInPage.clickSingleSignOnBtn();
    LogInPage.fillCompanyEmail(Cypress.env('CompanyEmailWithout@'));
    LogInPage.clickContinueBtn();
     cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn false business name with four numbers in Single Sign-On', () => {
    LogInPage.clickLogInBtn();
    LogInPage.clickSingleSignOnBtn();
    LogInPage.clickCompanyName();
    LogInPage.fillBusinessName(Cypress.env('BusinessNameWithFourNumbers'));
    LogInPage.clickContinueBtn();
     cy.url().should('include','/login/sign-in');
  })

})
