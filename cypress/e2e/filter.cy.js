describe("Filter på challenges-sidan", () => {
  it("visar felmeddelande när ingen challenge matchar sökningen", () => {
    cy.visit("/features.html");

    cy.contains("Filter challenges").click();

    cy.get("#typing").should("be.visible");

    cy.get("#typing").clear().type("zzzzzz123");

    cy.get("#info").should("contain", "No match found");
  });
});
