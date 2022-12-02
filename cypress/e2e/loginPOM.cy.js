/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM";

describe("login test", () => {
    before("visit gallery app", () => {
        cy.visit("/");
        loginPage.loginButton.click();
    });

    it("login with invalid credentials", () => {
        loginPage.login("pogresa@email.com", "123");
        cy.url().should("include", "/login");
    });
});