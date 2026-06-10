Cypress.Commands.add('login', () => {
    cy.get('[name="P9999_USERNAME"]').type('Eduarda.marques')
    cy.get('[name="P9999_PASSWORD"]').type('Sete@1403')
    cy.get('#acessar').click();
    // cy.get(':nth-child(6) > .t-Card > .t-Card-wrap').click()
})

Cypress.Commands.add('acessarCursosCriados', () => {
    cy.get('#t_MenuNav_4i').click()
    cy.get('[aria-hidden="true"][tabindex="-1"] > .a-Icon').click()
    cy.contains('Cursos criados').click({ force: true })
})
Cypress.Commands.add('sessionLogin', () => {
    cy.session('usuario-logado', () => {
        cy.intercept(
            'POST',
            '**/ords/wwv_flow.ajax?p_context=maestro/home/**'
        ).as('homeRequest')
        cy.visit('/')
        cy.get('[name="P9999_USERNAME"]').type(Cypress.env('email'))
        cy.get('[name="P9999_PASSWORD"]').type(Cypress.env('senha'))
        cy.get('#acessar').click()
        cy.wait('@homeRequest')
            .its('response.statusCode')
            .should('eq', 200)
    })
})