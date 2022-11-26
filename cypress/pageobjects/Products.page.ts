
export default class ProductsPage {  
    get productsTab(){
     return cy.xpath("//span[text()='Products']");
    }

    get productsSeeAllProductsBtn(){
     return cy.get("header>div~div>div>ul~div~div>ul>li>div>div>div>div>a[href='/products']")
    }

    get productsVideoAPILink(){
     return cy.xpath("//span[text()='Telnyx Video API']",{ timeout: 5000 })
    }

    get videoAPIGetStartedBtn(){
     return cy.get("div>h1~div>div>a[href='https://portal.telnyx.com/#/app/video/video-rooms']")
    }

    clickProductsSearchVideoAPILink(){
        this.productsTab.click({force:true});
        this.productsSeeAllProductsBtn.click({force:true});
        this.productsVideoAPILink.click({force:true});
        this.videoAPIGetStartedBtn.click({force:true});
    }
}
