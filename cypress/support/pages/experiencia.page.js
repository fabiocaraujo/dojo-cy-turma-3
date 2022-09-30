/// <reference types="cypress" />

class ExperienciaPage {
    get #cmpPosicao() { return cy.get('[name="title"]') }
    get #cmpEmpresa() { return cy.get('[data-test="experience-company"]') }
    get #cmpLocalizacao() { return cy.get('[data-test="experience-location"]') }
    get #cmpDataIni() { return cy.get('#from') }
    get #cmpDataFim() { return cy.get('#to') }
    get #chkAtual() { return cy.get('.MuiFormControlLabel-root')}
    get #cmpDescricao() { return cy.get('[rows="1"]') }
    get #btnAdicionar() { return cy.get('[data-test="experience-submit"]') }

    visitar() {
        cy.visit('adicionar-experiencia')
    }

    addExperiencia(posicao, empresa, local, inicio, fim, desc) {
        this.#cmpPosicao.type(posicao)
        this.#cmpEmpresa.type(empresa)
        this.#cmpLocalizacao.type(local)
        this.#cmpDataIni.type(inicio)
        this.#cmpDataFim.type(fim)
        this.#cmpDescricao.type(desc)
        this.#btnAdicionar.click()
    }

    addExperienciaAtual(posicao, empresa, local, inicio, desc) {
        this.#cmpPosicao.type(posicao)
        this.#cmpEmpresa.type(empresa)
        this.#cmpLocalizacao.type(local)
        this.#cmpDataIni.type(inicio)
        this.#chkAtual.click()
        this.#cmpDescricao.type(desc)
        this.#btnAdicionar.click()
    }
}

module.exports = new ExperienciaPage()