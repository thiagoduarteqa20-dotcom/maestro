describe('Criar Curso', () => {
    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/home')
    })

    it('Deve realizar um cadastro de treinamento', () => {
        cy.login()
        cy.contains('Portal de Aplicações').should('be.visible')
        cy.rotaTreinamentos()
        cy.get('[class="t-Breadcrumb-label"]').should('have.text', 'Treinamentos cadastrados')
        cy.criarTreinamentos()
    })
})
