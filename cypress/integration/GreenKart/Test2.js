/// <reference types="Cypress" />

describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
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
cy.get(".cart-icon > img").click()
cy.contains("ROCEED TO CHECKOUT").click()
cy.get()










})

})