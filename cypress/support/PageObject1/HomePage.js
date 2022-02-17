class HomePage
{

getEditBox()
{
    return cy.get("input[name='name']:nth-child(2)")
}
getGender()
{
    return cy.get("select")
}
getTwoWayBinding()
{
    return cy.get("input[name='name']:nth-child(1)")
}

getRadioBttn()
{
    return cy.get("#inlineRadio3")
}

getShopBttn()
{
    return cy.get(":nth-child(2) > .nav-link")
}
}

export default HomePage;