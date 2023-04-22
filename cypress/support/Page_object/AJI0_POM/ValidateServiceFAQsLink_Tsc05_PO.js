// Click on Service FAQs 

///<reference types='cypress-xpath'/>

class ValidateServiceFAQsLink_Tsc05_PO{
     
    clickOnServiceFAQsLink(){
       // click on Service FAQs link.     
       cy.xpath("//a[@class='service-faq']").invoke('removeAttr', 'target').click();

    }

    assertServiceFAQsPage(){
       
        // assert to confirm that "Frequently Asked Questions" text present. 
        cy.contains("Frequently Asked Questions").should('exist');
        
        // assert to confirm the selfcare(FAQs) page by using URL 
        cy.url().should("include", 'selfcare');
       
        // assert to conform search input tag on FAQs page
        cy.xpath('//input[@placeholder="Search for topics or questions"]').should('have.attr', 'type', "text"); 

    }

    }

export default ValidateServiceFAQsLink_Tsc05_PO;














