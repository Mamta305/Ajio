class CartPage{
    AssertCartBtn(){
        cy.get(".cart-blk").should("be.visible");
    }
    ClickCartBtn(){
        cy.get(".ic-cart ").click();
    }
    AssertProduct(){
        cy.xpath("//*[@class='product-img col-lg-2 col-4']").children("a").should("have.attr","href");
    }
    ClickOnProduct(){
        cy.xpath("//*[@class='product-img col-lg-2 col-4']").click();
    }
    ShowProductDetails(){
        cy.xpath("//*[@class='product-img col-lg-2 col-4']").should("exist");
        cy.xpath("//*[@class='product-details col-lg-10 col-8']").should("be.visible");


    }

}
export default CartPage;