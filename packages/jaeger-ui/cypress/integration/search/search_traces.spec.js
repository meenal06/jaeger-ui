import { ceil } from "lodash";

describe(__filename, function () {
    it('Queues a car from hotrod sample application', function () {
        cy.visitHotRod();
        cy.get('h1').should('to.contain', 'Hot R.O.D.')
        cy.get('.hotrod-button').contains("Rachel's Floral Designs").click()
        cy.get('.fresh-car').should('to.contain', 'find trace')
    });
    it('Searches for the trace from Jaeger UI', function () {
        cy.visitJaegerUI();
        cy.wait(100)
        cy.get('.ant-form').contains('Select A Service').click()
        cy.get('.Select-menu-outer').contains('customer').click()
        cy.get('button').contains('Find Traces').click({force: true})
        cy.get('.ResultItemTitle--item').should('to.contain', 'frontend')
        cy.get('.ResultItemTitle--item').should('to.contain', 'HTTP')
        cy.get('.ResultItemTitle--item').should('to.contain', 'GET')
        cy.get('.ResultItemTitle--item').should('to.contain', '/dispatch')
    });
});