/// <reference types="cypress" />

describe('Testes para a home', () => {
    /* PRA Ñ REPETIR O LINK EM CADA it */
    beforeEach(() => {
      cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
  
    it('Deve renderizar 4 vagas', () => {
      /* > li , PARA PEGAR O li FILHO DIRETO */
      cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
  
    /* TESTANDO A PESQUISA COM ENTER */
    it('Deve filtrar por fullstack', () => {
      cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
    })
  
    /* TESTANDO A PESQUISA COM CLICK E VERIFICAR SE TEM 1 li */
    it('Deve filtrar por fullstack', () => {
      cy.get('.FormVagas_campo__E1ppF').type('fullstack')
      cy.get('button[type="submit"]').click()
      cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
      
    })
  })