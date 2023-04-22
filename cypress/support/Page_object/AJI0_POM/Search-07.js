class SearchVal{
    SearchBox(){
     cy.get("input[name='searchVal']").click();
    }
    SelectVal(){
        // cy.get('#search').type('kurti');
        cy.wait(2000);
        cy.xpath('(//a[@class="search-suggestionList "])[5]').click({force: true});
    }
    SelectByCategory(){
        cy.get("input[name='searchVal']").click().type("kurti")
        cy.xpath("(//button[@class='rilrtl-button'])[1]").click();
    }
}
export default SearchVal;