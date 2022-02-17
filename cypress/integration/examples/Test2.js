/// <reference types="Cypress" />

describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{
// cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
// cy.get(".search-keyword").type("ca")
// cy.wait(2000)

// /* //visible concept to get only visible product not the invisible product
// cy.get(".product:visible").should('have.length',4) */
// // Parent child
// cy.get(".products").as("ProductsLocator")
// cy.get("@ProductsLocator").find(".product").should("have.length",4)

// //cy.get(".products").find(".product").eq(1).contains('ADD TO CART').click()
// cy.get("@ProductsLocator").find(".product").each(($el, index, $list) => {
// const textVal=$el.find("h4.product-name").text()
// if(textVal.includes('Cashews'))
// {
// $el.find('button').click()
// }
// })
// cy.get(".cart-icon > img").click()
// cy.contains("ROCEED TO CHECKOUT").click()
// cy.get()

cy.visit("https://rahulshettyacademy.com/angularpractice/")
cy.get("input[name='name']:nth-child(2)").type("Disha")
cy.get("input[name='name']:nth-child(2)").invoke('val').then(sometext => {
    cy.log(sometext);
})









})

})



// it('verify the filter functionality with tile navigation',function() {
//     overviewHelper.filterCancel();
//     overviewHelper.PendingTilOV().click();
//     cy.url().should('contain','/site');
//     overviewHelper.FilterLabel().contains(translations.FILTER_CRITERIA.FIRMWARE_UPDATE_AVAILABLE)
//     cy.clickNavOverview();
//   });


// export const PendingTilOV = () => cy.get('[data-cy=overview-updates]');

// export const FilterLabel = () => cy.get(".criterion-label");