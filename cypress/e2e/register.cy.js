/// <reference types="Cypress" />

describe("registration test", () => {
    it("register with valid input", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Viki");
    });
});