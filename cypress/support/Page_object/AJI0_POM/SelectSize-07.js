class SelectSize{
    SelectSizeProduct(){
     cy.get(".size-selection").should("exist");
     cy.xpath('(//div[@class="size-swatch"])[1]').click();
    }
}
export default SelectSize;