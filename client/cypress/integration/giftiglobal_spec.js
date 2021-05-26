describe("My first test", function() {
    it('clicks the link "type"', function(){
        cy.visit('http://localhost:3000')

        cy.contains('Log in').click()

        cy.url().should('include', 'auth/login')

        cy.get('.facebook')
          .type('button')
          .should('have.value', 'fake@email.com')

        
    })
})