/// <reference types="Cypress" />

describe("login test", () => {
    it("login with valid credentials", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        // cy.get('a[href="/login"]');
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get('input[id="email"]');
    });
});