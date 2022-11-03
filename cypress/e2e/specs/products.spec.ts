import {ProductsPage} from "../../pageobjects/Products.page"
import {MainPage} from "../../pageobjects/MainPage.page"

beforeEach(() => {
  cy.visit("/");
})

describe('Telnyx Products Test', () => {
it('Should enter VideoAPI in Products tab', () => {
    const productsPage = new ProductsPage();
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
    productsPage.clickProductsSearchVideoAPILink();
    cy.url().should('include','/login/sign-in');
  })
})