describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{
            statusCode:400}).as('stubPost')
      })
    it('Verifica falha no Login', () => {
      cy.get('[data-test="input-loginEmail"]').type('victor@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
    })

   // código omitido

   it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
    cy.login('victor.com', 'Senha123')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
})
  })