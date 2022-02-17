class ProductPage
{

getCheckoutBttn()
{
    return cy.get(".nav-link.btn.btn-primary")
}

getCheckout1()
{
    return cy.get(":nth-child(5) > :nth-child(5) > .btn")
}

getEditBxCtry()
{
    return cy.get("#country")
}

getCombobox()
{
    return cy.get(".suggestions > ul > li > a")
}

getPurchBttn()
{
    return cy.get("input[type='submit']")
}

getStatuMmsg()
{
    return cy.get(".alert")
}

getTbleVal()
{
    return cy.get("tr td:nth-child(4) strong")
}
getTotalVal()
{
    return cy.get("h3 strong")
}

}

export default ProductPage;