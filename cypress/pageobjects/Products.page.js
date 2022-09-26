require("cypress-xpath")

class ProductsPage {
    navigate(){
     return cy.visit('https://telnyx.com/')
    }
    acceptCloseBtn(){
      return cy.xpath("//button[text()='Accept and close']")
    }
    productsTab(){
     return cy.xpath("//span[text()='Products']");
    }
    productsSeeAllProducts(){
     return cy.get("header>div~div>div>ul~div~div>ul>li>div>div>div>div>a[href='/products']")
    }
    productsVideoAPILink(){
     return cy.xpath("//span[text()='Telnyx Video API']")
    }
    videoAPIGetStartedBtn(){
     return cy.get("div>h1~div>div>a[href='https://portal.telnyx.com/#/app/video/video-rooms']")
    }
    clickProductsSearchVideoAPILink(){
        this.navigate();
        this.productsTab().click({ force: true});
        this.productsSeeAllProducts().click({ force: true});
        this.productsVideoAPILink().click({force: true});
        this.videoAPIGetStartedBtn().click({force: true});      
    }
}
module.exports = new ProductsPage();
