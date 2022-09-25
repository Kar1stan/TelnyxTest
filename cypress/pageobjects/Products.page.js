require("cypress-xpath")

class ProductsPage {
    navigate(){
     return cy.visit('https://telnyx.com/')
    }
    clickProductsTab(){
     return cy.xpath("//span[text()='Products']");
    }
    clickProductsSeeAllProducts(){
     return cy.get("header>div~div>div>ul~div~div>ul>li>div>div>div>div>a[href='/products']")
    }
    clickProductsVideoAPILink(){
     return cy.xpath("//span[text()='Telnyx Video API']")
    }
    clickVideoAPIGetStartedBtn(){
     return cy.get("div>h1~div>div>a[href='https://portal.telnyx.com/#/app/video/video-rooms']")
    }

    productsSearchVideoAPILink(){
        this.navigate();
        this.clickProductsTab().click({force: true});
        this.clickProductsSeeAllProducts().click({ force: true});
        this.clickProductsVideoAPILink().click();
        this.clickVideoAPIGetStartedBtn().click();
    }
}
module.exports = new ProductsPage();
