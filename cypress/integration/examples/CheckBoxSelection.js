/// <reference types="Cypress" />

describe(' My second Test Suit', function()
{
it(' My first TestCase', function()
{


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//&&&&&&&&     CHECKBOXES      &&&&&&&&
// 
// cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
// cy.get("#checkBoxOption1").uncheck().should("not.be.checked").and("have.value","option1")
// cy.get("input[type='checkbox']").check(['option2','option3'])


//%%%%%%%%        STATIC DROPDOWNS          %%%%%%%%%%

//cy.get('select').select("option1").should("have.value","option1")


//##########        DYNAMIC DROPDOWNS          ###########

// cy.get("#autocomplete").type("in")
// cy.get(".ui-menu-item div").each(($el, index, $list) => {

//     if($el.text()=="India")
//     {
//         $el.click()
//     }
// })
// cy.get("#autocomplete").should("have.value","India")

//##########       VISIBLE AND IINVISIBLE OBJECT SELECTION          ###########

// cy.get("#displayed-text").should("be.visible")
// cy.get("#hide-textbox").click()
// cy.get("#displayed-text").should("not.be.visible")
// cy.get("#show-textbox").click()
// cy.get("#displayed-text").should("be.visible")

//$$$$$$$$$         RADIO BUTTON SELECTION          $$$$$$$$$$$

cy.get("input[value='radio2']").check().should("be.checked") //tagname is optional
cy.get("[value='radio1']").check().should("be.checked")


})

})
