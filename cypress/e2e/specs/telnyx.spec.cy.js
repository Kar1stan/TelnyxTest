import SignUpPage from "../../pageobjects/SignUp.page";
import LogInPage from "../../pageobjects/LogIn.page"
import ProductsPage from "../../pageobjects/Products.page"

describe('Telnyx Test', () => {
  it('Should SignUp with valid credentials', () => {
    SignUpPage.signUpWithValidCredentials("zixter28@gmail.com","boroQin","#Y*vz.102wh*90d");
    cy.wait(15000)
    cy.url().should('eq','https://telnyx.com/sign-up/verify-email/b');
  })

  it('Should SignUp with invalid password', () => {
    SignUpPage.signUpWithInvalidPassword("dfffg1QzBBBqq");
    cy.url().should('eq','https://telnyx.com/sign-up');
  })

  it('Should SignUp with empty credentials', () => {
    SignUpPage.signUpWithEmptyCredentials();
    cy.url().should('eq','https://telnyx.com/sign-up');
  })

  it('Should SignUp with LogIn link button ', () => {
    SignUpPage.signUpWithLogInLinkButton();
    LogInPage.logInSignUpLinkBtn('foloxov@gmail.com','ZpPQ_q!!u#Lz6PZ');
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with valid credentials', () => {
    LogInPage.logInWithValidCredentials('foloxov@gmail.com','ZpPQ_q!!u#Lz6PZ');
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with invalid password', () => {
    LogInPage.logInWithInvalidPassword('foloxov@gmail.com',"!!!!");
    LogInPage.logInErrorConfirmEmail().should('be.visible');
  })

  it('Should LogIn with empty credentials', () => {
    LogInPage.logInWithEmptyCredentials();
    cy.url().should('include','/login/sign-in');
  })

  it('Should LogIn with false company email in Single Sign-On', () => {
    LogInPage.logInCompanyEmail('foloxov@gmail.com');
    LogInPage.logInErrorRequestNotFound().should('be.visible');
  })

  it('Should LogIn with false business name in Single Sign-On', () => {
    LogInPage.logInBusinessName("5555");
    LogInPage.logInErrorRequestNotFound().should('be.visible');
  })

  it('Should enter VideoAPI in Products tab', () => {
    ProductsPage.productsSearchVideoAPILink();
    cy.url().should('include','/login/sign-in');
  })
})
