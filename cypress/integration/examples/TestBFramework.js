/// <reference types="Cypress" />

// import cypress from 'cypress'
import HomePage from '../../support/PageObject1/HomePage'
import ProductPage from '../../support/PageObject1/Product'

describe("Testing framework",function()
{

before(function()
{
// runs once all test in the block
    cy.fixture("example").then(function(Data)
    {
this.Data=Data        
    })

})
it("Framework Test case",function()
{
const homePage=new HomePage()
const productPage=new ProductPage()   //object creation for product class

cy.visit(Cypress.env('url'))
homePage.getEditBox().type(this.Data.name)
homePage.getGender().select(this.Data.gender)
homePage.getTwoWayBinding().should("have.value",this.Data.name)
//cy.pause()
homePage.getEditBox().should("have.attr","minlength","2")

//cy.get("input[name='name']:nth-child(2)").should("have.attr","minlength","2").debug()  //will pause the execution
homePage.getRadioBttn().should("be.disabled")
homePage.getShopBttn().click()

this.Data.productname.forEach(function(element)
{
    cy.SelectProduct(element)
});
var sum=0
productPage.getCheckoutBttn().click()
productPage.getTbleVal().each(($el,index,$list) => 
{
    const amount=$el.text()
    var res=amount.split(" ")
    res=res[1].trim()
    cy.log(res)
    sum=(sum)+Number(res)
    
}).then(function()
{
    cy.log(sum)
})
cy.get("h3 strong").then(function(TotalValue)
    {
        const FinalVal=TotalValue.text()
        var FinalRes=FinalVal.split(" ")
        FinalRes=FinalRes[1].trim()
        expect(Number(FinalRes)).to.equal(sum)
    })

cy.wait(1000)
productPage.getCheckout1().click()
productPage.getEditBxCtry().type("India")
cy.wait(1000)
//cypress.config('deafultCommandTimeout', 8000)
productPage.getCombobox().click()

cy.get("#checkbox2").click({force:true})
productPage.getPurchBttn().click()
return cy.get(".alert").then(function(element)
{
    const textval=element.text()
    expect(textval.includes("Success")).to.be.true
})
})
})