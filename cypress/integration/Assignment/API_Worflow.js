describe("API Testing",function(){
    it("Testing related to url",function(){
        var i=20;
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
             headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBlNDM4NTI1NjMzNDAwMTUyYTc4MDYiLCJpYXQiOjE2NDUxMDE5NTd9.kMbw_CP0pih9yhdeAXaiQ_1doydtGejqwDlvyh9Yvkw',
             },
             body: {
                "firstName": "user"+i,
                "lastName": "test"+i,
                "email": "demouser"+i+"@gmail.com",
                "password": "Siemens2019@"
             },
            retryOnNetworkFailure: true,
            retryOnStatusCodeFailure: false
        }).its('status').should('eq',201);
            i++;

            cy.request({
                method: 'GET',
                url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
                 headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBlNDM4NTI1NjMzNDAwMTUyYTc4MDYiLCJpYXQiOjE2NDUxMDE5NTd9.kMbw_CP0pih9yhdeAXaiQ_1doydtGejqwDlvyh9Yvkw',
                 },
                retryOnNetworkFailure: true,
                retryOnStatusCodeFailure: false
            }).its('status').should('eq',200);

            cy.request({
               method: 'POST',
               url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
                headers: {
               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBkZjJiNmYyMWM3NTAwMTVmZmI1MmUiLCJpYXQiOjE2NDUwODQwODl9.El_x7kKztXTYMSRiGI4vYhRuLaAZnvuklfORfVWAsDk',
               },
               body: {
                   
                       "firstName": "Disha",
                       "lastName": "Thakur",
                       "birthdate": "1977-05-02",
                       "email": "jdoe@fake.com",
                       "phone": "9730872259",
                       "street1": "Gandhi chowk",
                       "street2": "Departemnt A",
                       "city": "Nagpur",
                       "stateProvince": "MH",
                       "postalCode": "440001",
                       "country": "India"     
               },
               retryOnNetworkFailure: true,
               retryOnStatusCodeFailure: false
             }).then((response) => {
                   const jsonData = response.body;
                    const contactid = jsonData._id
                    return contactid
         }).then((id) => {
             
        cy.request({    
            method: 'DELETE',
            url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
             headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBkZjJiNmYyMWM3NTAwMTVmZmI1MmUiLCJpYXQiOjE2NDUwODQwODl9.El_x7kKztXTYMSRiGI4vYhRuLaAZnvuklfORfVWAsDk',
             },
            retryOnNetworkFailure: true,
            retryOnStatusCodeFailure: false
        }).its('status').should('eq',200);
    });

       
        cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
             headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBkZjJiNmYyMWM3NTAwMTVmZmI1MmUiLCJpYXQiOjE2NDUwODQwODl9.El_x7kKztXTYMSRiGI4vYhRuLaAZnvuklfORfVWAsDk',
             },
            retryOnNetworkFailure: true,
            retryOnStatusCodeFailure: false
        });

        //cy.log('server is down for this request gettting 503')
    //   cy.request({
    //     method: 'PUT',
    //     url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/',
    //      headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBkZjJiNmYyMWM3NTAwMTVmZmI1MmUiLCJpYXQiOjE2NDUwODYxMjZ9.HPkDYdFIkcCKz286tVcYX4032Txr-9gjC8rd5FCTnpA',
    //     },
    //     body: {
            
    //             "firstName": "Disha",
    //             "lastName": "Thakur",
    //             "birthdate": "1978-05-02",
    //             "email": "jdoe1234@fake.com",
    //             "phone": "9021113903",
    //             "street1": "Azad chowk",
    //             "street2": "Departemnt B",
    //             "city": "Nagpur",
    //             "stateProvince": "MH",
    //             "postalCode": "440011",
    //             "country": "India"     
    //     },
    //     retryOnNetworkFailure: true,
    //     retryOnStatusCodeFailure: false
    //   }).then((response)=>{
    //     expect(response.status).equal(200);
    //     expect(response.body.firstName).equal('Disha');
    //     expect(response.body.email).equal('jdoe1234@fake.com');
    // });

    }); 
}) ;