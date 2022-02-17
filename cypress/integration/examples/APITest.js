/// <reference types="Cypress" />

describe("API Testing",function(){
    it("Testing related to url",function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        

        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, 
        {
            statusCode: 200,
            body:[
                {
                    "book_name":"RestAssured wiht Java",
                    "ibsn":"RSU",
                    "aisble":"2301"
                }
            ]
        }).as("bookretrivers")
        cy.get(".btn.btn-primary").click()
        cy.wait('@bookretrivers').should(({request,response})=>
        {
            cy.get("tr").should("have.length",response.body.length+1)
        })
        cy.get('p').should("have.text","Oops only 1 Book available")

    })
}) 