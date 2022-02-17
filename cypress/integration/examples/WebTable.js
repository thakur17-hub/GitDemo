/// <reference types="Cypress" />



describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get("input[value='Alert']").click()
cy.get("input[value='Confirm']").click()
// window:alert to handle the any alert in cypress
cy.on('window:alert',(str) => {
    //mocha framework
    expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
})


cy.on("window:alert",(str1)=>
{
    expect(str1).to.be.equal("Hello , Are you sure you want to confirm")
})

cy.get("tr td:nth-child(2)").each(($el,index,$list)=>{

    const text=$el.text()
    if (text.includes("Pyhton"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
        
            const priceText=price.text()
            expect(priceText).to.equal("25")
        })
    }
})
cy.get(".mouse-hover-content").invoke('show')
cy.contains("Top").click({force: true})
cy.url('includes',"top")




})

})
