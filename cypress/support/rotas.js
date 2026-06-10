Cypress.Commands.add('rotaTreinamentos', () => {
    cy.contains('Treinamentos').should('be.visible').click()
    cy.get('#t_MenuNav_4i').click()
    cy.get('#t_MenuNav_4_3').click()

})