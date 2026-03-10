describe("Navigation", () => {
  it("kan navigera från startsidan till challenges och tillbaka", () => {
    cy.visit("/");

    cy.contains("See all challenges").click();

    cy.url().should("include", "features");

    cy.contains("Our Challenges").should("exist");

    cy.contains("Back to home page").click();

    cy.get("#top-three").should("exist");
  });
});
