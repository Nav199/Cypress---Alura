describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
      })
    it('Deve preencher os campos do formulário corretamente para fazer um novo usuário', () => {
      cy.get('[data-test="input-loginEmail"]').type('victor@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
 
    })
  })