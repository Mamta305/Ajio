class ProceedShipping{
    AssertShippingBtn(){
        cy.xpath("//button[@class='rilrtl-button button shipping-button']").should("have.text","Proceed to shipping");
    }
    ClickShippingBtn(){
        cy.xpath("//button[@class='rilrtl-button button shipping-button']").click();
    }
    
}
export default ProceedShipping;