/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.loginApp()
        cy.visit('criar-perfil')
    });
    
    it.only('Deve visitar a tela sem abrir tela de login', () => {
        cy.log('Visitou!!!!!!!')
    });
    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('Especialista em QA').click()
        cy.get('[data-test="profile-company"]').type('Via')
        cy.get('[data-test="profile-webSite"]').type('http://www.viahub.com')
        cy.get('[data-test="profile-location"]').type('São Paulo')
        cy.get('[data-test="profile-skills"]').type('c#, Java, JS, ruby')
        cy.get('[data-test="profile-gitHub"]').type('fabioaraujo')
        cy.get('[data-test="profile-bio"]').type('Olá, sou o Fábio...')
        //cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    it('Deve criar perfil com sucesso - Commands', () => {
        cy.criarPerfil('QA Pleno', 'Via', 'http://www.viahub.com', 'São Paulo', 'c#, Java, JS, ruby', 'fabioaraujo', 'Olá, sou o Fábio...')
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    it('Deve validar mensagem de erro ao cadastrar com site errado', () => {
        cy.criarPerfil('QA Pleno', 'Via', 'www', 'São Paulo', 'c#, Java, JS, ruby', 'fabioaraujo', 'Olá, sou o Fábio...')
        cy.contains('Digite uma url válida').should('be.visible')
    });


});
