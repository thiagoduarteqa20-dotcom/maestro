describe('Login Maestro', () => {
    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/home')
    })

    it('Deve realizar login com sucesso', () => {
        cy.login()
        cy.contains('Portal de Aplicações').should('be.visible')
    })

})