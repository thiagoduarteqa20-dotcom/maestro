Cypress.Commands.add('criarTreinamentos', () => {
    cy.contains('Gerar nova turma').should('be.visible').click()
    // cy.contains('Empresa').should('be.visible').click()
    cy.get('body').then(($body) => {
        console.log($body.html())
    })
    cy.get('#P14_CD_EMPRESA_lov_btn', { timeout: 10000 }).should('exist').click()
    cy.get('.a-PopupLOV-search').type('seven')
    cy.get('.a-PopupLOV-searchBar > .a-Button').click()
})