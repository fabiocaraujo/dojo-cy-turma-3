/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil via API', () => {
    
    let token
   
    beforeEach(() => {
        cy.token().then((tkn) =>{
            token = tkn
        })
    });

    it('Deve criar perfil com sucesso', () => {
        cy.request({
            method: 'POST', 
            url: 'api/profile',
            headers: {
                Cookie: token
            },
            body: {
                company: "Dojo",
                status: "QA Sênior",
                location: "SP",
                website: "https://pokeapi.co/docs/v2",
                skills: "Java script",
                bio: "Formado em TI na FIAP...",
                githubusername: "fabioaraujo"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.company).equal("Dojo")
        })
    });

});