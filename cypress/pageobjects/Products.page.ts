
export class ProductsPage {  
    productsTab(){
     return cy.xpath("//span[text()='Products']");
     //button[aria-label="close and deny"]~div>div>button
    }

    productsSeeAllProductsBtn(){
     return cy.get("header>div~div>div>ul~div~div>ul>li>div>div>div>div>a[href='/products']")
    }

    productsVideoAPILink(){
     return cy.xpath("//span[text()='Telnyx Video API']",{ timeout: 5000 })
    }

    videoAPIGetStartedBtn(){
     return cy.get("div>h1~div>div>a[href='https://portal.telnyx.com/#/app/video/video-rooms']")
    }

    clickProductsSearchVideoAPILink(){
        this.productsTab().click({force:true});
        this.productsSeeAllProductsBtn().click({force:true});
        this.productsVideoAPILink().click({force:true});
        this.videoAPIGetStartedBtn().click();
    }
}
