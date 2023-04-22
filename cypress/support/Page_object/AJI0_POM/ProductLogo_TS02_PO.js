
class ProductLogo_TS02_PO{
    verifyProductLogo_TC_08(){
        cy.get('[src="https://assets.ajio.com/static/img/Ajio-Logo.svg"]').should('exist');
        cy.get('[src="https://assets.ajio.com/static/img/Ajio-Logo.svg"]').should('be.visible');
    }

    validateProductPage_TC_22(){
        cy.get('[src="https://assets.ajio.com/static/img/Ajio-Logo.svg"]').click();
        
        cy.url().should('eq','https://www.ajio.com/');

    }
}

export default ProductLogo_TS02_PO;