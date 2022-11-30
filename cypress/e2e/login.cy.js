/// <reference types="Cypress" />

describe("login test", () => {
    it("login with valid credentials", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        // cy.get('a[href="/login"]');
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        // cy.get('input[id="email"]');
        cy.get("#email").type("marci@gmail.com");
        cy.get("#password").type("12341234");
        cy.get("button").click();
    });

    it("logout", () => {
        // cy.wait(500);
        cy.get(".nav-link").should("have.length", 4);
        cy.get('.nav-link').eq(3).click();
    });
});