describe(__filename, function () {
    it('Ensures nav-bar has all the buttons', function () {
        cy.visitJaegerUI();
        cy.get('.ant-menu-item').should('to.contain', 'JAEGER UI')
        cy.get('.ant-menu-item').should('to.contain', 'Search')
        cy.get('.ant-menu-item').should('to.contain', 'Compare')
        cy.get('.ant-menu-item').should('to.contain', 'System Architecture')
    });
    it('Ensures search button redirects to the search form', function () {
        cy.visitJaegerUI();
        cy.get('.ant-menu-item').should('to.contain', 'Search')
        cy.get('.ant-menu-item').contains('Search').click()
        cy.get('div[role="tablist"]').should('to.contain', 'JSON File')
        cy.url().should('include', '/search') 
    });
    it('Ensures compare button redirects to the compare trace page', function () {
        cy.visitJaegerUI();
        cy.get('.ant-menu-item').should('to.contain', 'Compare')
        cy.get('.ant-menu-item').contains('Compare').click()
        cy.get('.TraceDiff--graphWrapper').should('to.contain', 'At least two Traces are needed')
        cy.url().should('include', '/trace') 
    });
    it('Ensures system architecture button redirects to the search form', function () {
        cy.visitJaegerUI();
        cy.get('.ant-menu-item').should('to.contain', 'System Architecture')
        cy.get('.ant-menu-item').contains('System Architecture').click()
        cy.get('.Page--content').should('to.contain', 'No service dependencies found.')
        cy.url().should('include', '/dependencies') 
    });
});