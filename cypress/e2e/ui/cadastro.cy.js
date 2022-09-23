/// <reference types="cypress" />
var faker = require('faker-br');

describe('Funcionalidade: Cadastro do Conexão QA', () => {
    beforeEach(() => {
        cy.visit('cadastrar')
    });
    it('Deve fazer cadastro com sucesso', () => {
        let nome = faker.name.findName()
        let email = faker.internet.email(nome)
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', nome)
    });
    
});