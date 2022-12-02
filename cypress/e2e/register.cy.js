/// <reference types="Cypress" />

const Locators = require("../fixtures/Locators.json");

describe("registration test", () => {
    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
    }

    let email = `${makeId(5)}@test.com`;

    it("register with valid input", () => {
        cy.visit("/");
        cy.get(Locators.Register.registerLink).click();
        cy.get(Locators.Register.firstNameInput).type("Viki");
        cy.get(Locators.Register.lastNameInput).type("Developer");
        cy.get(Locators.Register.emailField).type(email);
        cy.get(Locators.Register.passwordField).type("12341234");
        cy.get(Locators.Register.passwordConfirmation).type("12341234");
        cy.get(Locators.Register.checkbox).check();
        cy.get(Locators.Register.registeButton).click();
        cy.url().should("not.include", "./register");
    });
});