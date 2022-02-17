/// <reference types="Cypress" />



describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get("#opentab").then(function(el) {
    const url=el.prop('href')
    cy.visit(url)
}
)
cy.get()



})

})
