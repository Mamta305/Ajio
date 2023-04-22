// Verification of input tag for searching products on the NavBar
///<reference types='cypress-xpath'/>
class FilterMenFromMarvelComic_TSc04_PO{
   
    filterMan(){

       // filter man by using xpath locator by click .
       
       // cy.xpath('//label[@for="Men"]').should('be.visible').click();
       cy.xpath('(//input[@type="checkbox"])[2]').check({force: true});
        
    }       
    
    assertAfterFilterMan(){

        // assert the checkbox by using .should
        cy.xpath('(//input[@type="checkbox"])[2]').should('be.checked');

        // assert used on the Selected box.  
        cy.xpath('(//div[@class="fnl-plp-appliedFliters "])').first().should('have.text', "Men");
        
        // this assert will confirm that only 19 products related to men in the Marvel Comics section.
        cy.get('.length').contains('19').should('exist');
       }
    }
export default FilterMenFromMarvelComic_TSc04_PO;


