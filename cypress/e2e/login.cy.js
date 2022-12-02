/// <reference types="Cypress" />

const Locators = require("../fixtures/Locators.json");

describe("login test", () => {
    it("login with valid credentials", () => {
        cy.visit("/");
        cy.get(Locators.Login.loginButton).click();
        cy.get(Locators.SharedElements.emailInput).type("bobolina@gmail.com");
        cy.get(Locators.SharedElements.passwordInput).type("12341234");
        cy.get(Locators.SharedElements.submitButton).click();
    });

    it("logout", () => {
    //     // // cy.wait(500);
        cy.get(".nav-link").should("have.length", 4);
        cy.get('.nav-link').eq(3).click();
        });
    });