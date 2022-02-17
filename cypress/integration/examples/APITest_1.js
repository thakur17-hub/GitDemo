/// <reference types="Cypress" />

describe("API Testing",function(){
    it("Testing related to url",function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue(res=>{
                //expect(res.statusCode).to.equal(403)
            })
        }).as("dummy")
        cy.get(".btn.btn-primary").click()
        cy.get("@dummy")
       
    })
}) 