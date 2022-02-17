/// <reference types="Cypress" />

describe(' My first Test Suit', function()
{
it(' My first TestCase', function()
{
 cy.visit("https://assets.apps.horizonint.cloud/#/sites/sitedetails/097c9ec1-0765-4ad4-8f67-32f852ba4290")
cy.get(".search-keyword").type("ca")
cy.wait(2000)

/* //visible concept to get only visible product not the invisible product
cy.get(".product:visible").should('have.length',4) */
// Parent child
cy.get(".products").as("ProductsLocator")
cy.get("@ProductsLocator").find(".product").should("have.length",4)

//cy.get(".products").find(".product").eq(1).contains('ADD TO CART').click()
cy.get("@ProductsLocator").find(".product").each(($el, index, $list) => {
const textVal=$el.find("h4.product-name").text()
if(textVal.includes('Cashews'))
{
$el.find('button').click()
}
})

cy.get('.brand').should("have.text",'GREENKART')
const logo=cy.get('.brand').then(function(text)
{
    const titlename=(text.text())
    cy.log(titlename)
})
//cy.log(cy.get('.brand').text())  // text() is jqeru object hence cannot be used driectly without resolving this









})

})
