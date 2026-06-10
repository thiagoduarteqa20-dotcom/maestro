describe('Criar Curso', () => {

    beforeEach(() => {
        cy.sessionLogin()
        cy.acessarCursosCriados()
    })

    it('Criar curso com sucesso', () => {
        cy.get(':nth-child(6) > .t-Card > .t-Card-wrap').click()
        cy.get('#B56077818948664425').click();
        cy.get(':nth-child(2) > [name="P7_CLASSIFICACAO"]').click();
        cy.get('#P7_CD_EMPRESA').click()

        // Campo de pesquisa
        cy.get('#PopupLov_7_P7_CD_EMPRESA_dlg input').type('Sete')
        cy.get('li[data-id="26"]', { timeout: 10000 }).click()


        //Campo de contrato
        cy.get(':nth-child(2) > [name="P7_TP_USO"]').click();
        cy.get('#P7_CD_CONTRATO').click();
        cy.get('#PopupLov_7_P7_CD_CONTRATO_dlg ul li').eq(2).click()
        cy.get('[name="P7_CARGA_HORARIA"]').type('25')
        cy.get('[name="P7_NOME_CURSO"]').type('Teste de automação')
        cy.get('#P7_DESCRICAO_CONTAINER').type('Esse teste é um regressivo de automação')

        //Campo de responsável
        cy.get('#P7_CD_RESPONSAVEL').click();
        cy.get('[data-id="5819"]').click();
        cy.get('#P7_DS_FUNCAO').click();


        //Campo de assinatura
        cy.get('#sign-canva_signature_canvas').click();
        cy.wait(1500);

        cy.get('#SAVE_BTN > .t-Button-label').click();




    })

})
