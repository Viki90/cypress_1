/// <reference types="Cypress" />

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
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Viki");
        cy.get("#last-name").type("Developer");
        cy.get("#email").type(email);
        cy.get("#password").type("12341234");
        cy.get("#password-confirmation").type("12341234");
        cy.get('input[type="checkbox"]').check();
        cy.get("button").click();
    });
});