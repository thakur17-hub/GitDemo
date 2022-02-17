it('the',function() {
        
    cy.log('post site with api');
    cy.getUsersBearerToken().then(bearerToken => {
      
        return cy.request({
          method: 'POST',
          url: `https://product-int.webapp.horizonint.cloud/api/v1/organizations/1b63371f-dbe0-4593-92da-15ea4449fab5/elements`,
          headers: {
            'Authorization': `${bearerToken}`
          },
          body: {
            elementType: "horizonEquipment",
            productId: "dataSetup",
            version: "v0",
            data: {
                attributes: {
                    label: "DishaEQ12345",
                    description: "Eq description"
                },
                locatedAt: {
                    data: {
                        id: "575c0aa1-3248-4a69-9048-1966034877d5",
                        type: "campus"
                    }
                }
            },
            "orgId": "1b63371f-dbe0-4593-92da-15ea4449fab5"
        }
        }).its('status').should('eq', 201);
        
    });
    cy.wait(2000);

    eqHelper.deleteSpecificEquipment("DishaEQ12345",'1b63371f-dbe0-4593-92da-15ea4449fab5');
});