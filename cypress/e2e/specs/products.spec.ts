import ProductsPage from "../../pageobjects/Products.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Telnyx Products Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

it('Should enter VideoAPI in Products tab', () => {
    MainPage.clickAcceptCookiesBtn();
    ProductsPage.clickProductsTab();
    ProductsPage.clickProductsSeeAllProductsBtn();
    ProductsPage.clickProductsVideoAPILink();
    ProductsPage.clickVideoAPIGetStartedBtn();
    cy.url().should('include','/login/sign-in');
  })
})