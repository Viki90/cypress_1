/// <reference types="Cypress" />

describe("login test", () => {
    it("visit gallery app", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
    });
});