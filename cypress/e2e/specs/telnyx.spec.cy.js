import SignUpPage from "../../pageobjects/SignUp.page";
import LogInPage from "../../pageobjects/LogIn.page"
import ProductsPage from "../../pageobjects/Products.page"

describe('Telnyx Test', () => {
  it('Should SignUp with valid credentials', () => {
    SignUpPage.fillSignUpWithValidCredentials("qertixpost71@gmail.com","Buazon","1Y1vq.154wh*19d");
    cy.wait(25000)
    cy.url().should('include','/verify-email/f');
  })

  it('Should SignUp with invalid password', () => {
    SignUpPage.fillSignUpWithInvalidPassword("dfffg1QzBBBqq");
    cy.url().should('eq','https://telnyx.com/sign-up');
  })

  it('Should SignUp with empty credentials', () => {
    SignUpPage.fillSignUpWithEmptyCredentials();
    cy.url().should('eq','https://telnyx.com/sign-up');
  })

  it('Should SignUp with LogIn link button ', () => {
    SignUpPage.clickSignUpWithLogInLinkButton();
    LogInPage.clickLogInSignUpLinkBtn('foloxov@gmail.com','ZpPQ_q!!u#Lz6PZ');
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with valid credentials', () => {
    LogInPage.fillLogInWithValidCredentials('foloxov@gmail.com','ZpPQ_q!!u#Lz6PZ');
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with invalid password', () => {
    LogInPage.fillLogInWithInvalidPassword('foloxov@gmail.com',"!!!!");
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with empty credentials', () => {
    LogInPage.fillLogInWithEmptyCredentials();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn with false company email in Single Sign-On', () => {
    LogInPage.fillLogInCompanyEmail('foloxov@gmail.com');
    LogInPage.logInErrorRequestNotFound().should('be.visible');
  })

  it('Should LogIn with false business name in Single Sign-On', () => {
    LogInPage.fillLogInBusinessName("5555");
    LogInPage.logInErrorRequestNotFound().should('be.visible');
  })

  it('Should enter VideoAPI in Products tab', () => {
    ProductsPage.clickProductsSearchVideoAPILink();
    cy.url().should('include','/login/sign-in');
  })
})
