class MensPageCategories_TS03_PO{
    varifySponsorBrand_TC_36(){
        cy.xpath('//*[@title="MEN"]').click();
        cy.url().should('include','men');
        
        cy.get('[src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-SpringtimeBrands-header.jpg"]').should('exist');

        cy.get('[src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-SpringtimeBrands-header.jpg"]').should('be.visible');
    }

    varifyBloomingToday_TC_37(){
        cy.get('[src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-BloomingToday-header.jpg"]').should('exist');

        cy.get('[src="https://assets.ajio.com/cms/AJIO/WEB/07042023-D-MHP-BloomingToday-header.jpg"]').should('be.visible');
    }
}

export default MensPageCategories_TS03_PO;