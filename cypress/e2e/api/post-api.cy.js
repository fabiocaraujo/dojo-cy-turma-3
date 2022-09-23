/// <reference types="cypress" />

describe('Funcionalidade: Publicação via API', () => {

    let token 

    beforeEach(() => {
        cy.token().then((tkn) => {
            token = tkn
        })
    });

    it('POST - Deve criar uma publicação com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: { Cookie: token },
            body: {
                text: "Hello world"
            }
        }).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.text).equal('Hello world')
        })
    });

    it('GET - Deve listar uma publicação com sucesso', () => {
        cy.request({
            method: 'GET', 
            url: 'api/posts',
            headers: { Cookie: token }
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body[0]).to.have.property('avatar')
        })
    });

    it('PUT - Deve dar joinha em uma publicação com sucesso', () => {
        cy.criarPost(token, 'Texto para curtir')
        .then((response)=>{
            //cy.log(response.body._id)
            let id = response.body._id
            cy.request({
                method: 'PUT',
                url: 'api/posts/like/' + id, 
                headers: { Cookie: token }
            }).should((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body[0]).to.have.property('user')
            })
        })
    });

    it('DELETE - Deve excluir uma publicação com sucesso', () => {
        cy.criarPost(token, 'Post para deletar')
        .then((response)=>{
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                url: `api/posts/${id}`, 
                headers: { Cookie: token }
            }).should((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body.msg).to.equal('Post removido')
            })
        })

    });
});

