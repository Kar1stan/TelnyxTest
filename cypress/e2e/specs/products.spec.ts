import ProductsPage from "../../pageobjects/Products.page"
import MainPage from "../../pageobjects/MainPage.page"

beforeEach(() => {
  const mainPage = new MainPage();
  mainPage.visitUrl();
})

describe('Telnyx Products Test', () => {
  const productsPage = new ProductsPage();
it('Should enter VideoAPI in Products tab', () => {
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
    productsPage.clickProductsSearchVideoAPILink();
    cy.url().should('include','/login/sign-in');
  })
})