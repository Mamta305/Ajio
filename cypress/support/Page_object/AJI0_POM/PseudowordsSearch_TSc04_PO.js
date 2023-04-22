// Verification of input tag for searching products on the NavBar
import 'cypress-xpath';
class PseudowordsSearch_TSc04_PO{
   
    pseudowordSearch(word){
        // type a pseudo word in the input tag by the help of fixture file. 
      cy.get('.react-autosuggest__input').type(`${word}{enter}`); 
        // implicit assertion of the text by using .should. 
      cy.xpath("//div[@class='fnl-slpsearch-firstLine']").should('have.text', "Sorry! We couldn't find any matching items for");
        // assert the text which user search in the url. 
      cy.url().should('include', word) 
        
      }
    }
export default PseudowordsSearch_TSc04_PO;

