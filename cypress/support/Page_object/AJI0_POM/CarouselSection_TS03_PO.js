class CarouselSection_TS03_PO{
    varifyCarouselSection_TC_42(){
        cy.xpath('//*[@title="MEN"]').click();
        cy.url().should('include','men');

        cy.xpath('(//*[@class="react-slideshow-container"])[1]').should('exist');

        cy.xpath('(//*[@class="react-slideshow-container"])[1]').should('be.visible');
    }
}

export default CarouselSection_TS03_PO;
