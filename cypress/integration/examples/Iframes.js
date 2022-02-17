/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"


describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.frameLoaded("courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)


})

})
