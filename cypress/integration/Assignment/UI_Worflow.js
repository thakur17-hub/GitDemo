/// <reference types="Cypress" />



import * as uiData from '../../fixtures/UI_data.json';

describe(' My first Test Suit', function()
{
    it(' My first TestCase', function()
    {   
       cy.visit(uiData.url);
       cy.log('Validating the serach suggestion after entering 3 char');
       cy.get('#search_query_top').clear().type('Fad');
       cy.wait(2000);
       cy.get('.ac_even').should('be.visible').contains('Faded');
       cy.get('#search_query_top').clear().type('Dress');
       cy.get('#searchbox > .btn').click();
       for (var i = 1; i <=5; i++) {
        cy.get(":nth-child("+i+") > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span").should('be.visible');
        cy.get(":nth-child("+i+") > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span").click();
        cy.wait(2000);
        cy.get('.cross').click();      
       }
       cy.scrollTo('top')
       cy.get('[title="View my shopping cart"]').click();
       var sum=0
       cy.get("tr td:nth-child(4)").each(($el,index,$list) => {
        cy.log($el.text());
        const amount=$el.text()
        var res=amount.split('$');
        var amt=res[1].split('-');
        var finalamt=amt[0].trim();
        cy.log(finalamt);
        var res1=parseFloat(finalamt);
       sum=sum+res1
       }).then(function() {
            cy.log(sum);
      });
      cy.get('#total_product').then(function(textValue) {
        var textval1=textValue.text();
        cy.log(textval1);
        var totalProduct=textval1.split('$');
        var sum1=parseFloat(totalProduct[1]);
        expect(sum).to.equal(sum1);
      })
    });

    it('Uploading file', function() {
        cy.visit('http://automationpractice.com/index.php?controller=contact');

    });
});