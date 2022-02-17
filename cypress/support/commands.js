// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
 //import 'cypress-file-upload';

Cypress.Commands.add("SelectProduct", (productname) => { 
    cy.get(".card-title").each((val,index,$list)=>{
        if(val.text().includes(productname))
        {
            cy.get(".btn.btn-info").eq(index).click()
        }
 })
 
//  export function getUsersBearerToken() {
//     return cy.window().then(win => `Bearer ${win.sessionStorage.getItem('access_token')}`);
//   }
    
})




//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


