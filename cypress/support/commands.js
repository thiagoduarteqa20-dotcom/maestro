Cypress.Commands.add('login', () => {
    cy.visit('/ords/r/sete/maestro/login?tz=-3:00')

    cy.get('[name="P9999_USERNAME"]').type('Eduarda.marques')
    cy.get('[name="P9999_PASSWORD"]').type('Sete@1403')
    cy.get('#acessar').click();

    cy.get(':nth-child(6) > .t-Card > .t-Card-wrap').click()
})

Cypress.Commands.add('acessarCursosCriados', () => {
    cy.get('#t_MenuNav_4i').click()
    cy.get('[aria-hidden="true"][tabindex="-1"] > .a-Icon').click()
    cy.contains('Cursos criados').click({ force: true })
})