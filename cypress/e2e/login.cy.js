/// <reference types="Cypress" />

describe("login test", () => {
    it("visit gallery app", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        // cy.get('a[href="/login"]');
        cy.get('a[class="nav-link nav-buttons"]').first();
    });
});