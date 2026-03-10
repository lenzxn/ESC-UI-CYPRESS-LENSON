describe("Navigation", () => {
  it("kan navigera från startsidan till challenges", () => {
    cy.visit("/");

    cy.contains("See all challenges").click();

    cy.url().should("include", "features");

    cy.contains("Our Challenges").should("exist");
  });
});
