/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: US - 007 - Tela de Login', () => {

    beforeEach(() => {
        // Executar algo antes de cada cenário
        cy.visit('login')
    });

    afterEach(() => {
        // Executar algo depois de cada cenário
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@dojo.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="login-submit"]').click() 
        cy.get('[data-test="dashboard-welcome"]').should('contain' , 'Fábio Araújo')
    });

    it('Deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').select('QA Junior')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('testedfd@123')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas') 
    });

    it('Deve fazer login com sucesso - Usando commands', () => {
        cy.login('teste@dojo.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain' , 'Fábio Araújo')
    });

    it('Deve fazer login com sucesso usando importação de Massa de dados', () => {
        cy.login(usuario.usuario, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain' , usuario.nome)
    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture("multi-usuarios").then((multi) =>{
            cy.login(multi[1].usuario, multi[1].senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain' , multi[1].nome)
        })
    });

    it('Criar perfil', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
    });

});


/* 
Funcionalidade: US-007 - Tela de Login
Como usuário do conexão QA
Quero fazer login
Para interagir com outros QAs

Cenário: Fazer login com sucesso
Arrange - Pré requisito - Dado que tenha um usuário válido
Action - Ações do usuário - Quando Acesso a tela de Login
E Insiro os dados válidos 
Assert - Resultado esperado - Então deve exibir uma mensagem de sucesso

Cenário: Login com usuário ou senha inválidos
*/

