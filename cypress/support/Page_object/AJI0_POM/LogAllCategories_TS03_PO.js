class LogAllCategories_TS03_PO {
  logAllCategories_TC_43() {
    cy.xpath('//*[@title="MEN"]').click();
    cy.url().should('include','men');

    cy.get('[src*="-header.jpg"]')
      .each(($el, index, $list) => {
        if(index!==6 && index!==7 && index!==8){
          cy.log($el.attr('src').split("MHP-")[1].split("-")[0])
        }
        
      });
  }
}

export default LogAllCategories_TS03_PO;
