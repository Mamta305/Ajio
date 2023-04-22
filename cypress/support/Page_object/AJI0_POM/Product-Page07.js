class ProductPage{
    AssertProductPage(){
        cy.get(".header2").should("have.text","kurti");
    }
    AssertFirstProduct(){
        cy.xpath("(//a[@class='rilrtl-products-list__link'])[1]").should("have.attr","href");
        cy.xpath("(//a[@class='rilrtl-products-list__link'])[1]").invoke("removeAttr","target").click();

    }
}
export default ProductPage;