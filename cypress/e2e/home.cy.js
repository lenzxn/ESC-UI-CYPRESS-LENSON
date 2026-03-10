describe("Startsidan", () => {
  it("laddar startsidan", () => {
    cy.visit("/");
    cy.url().should("include", "127.0.0.1:5501");
  });

  it("visar statisk text på startsidan", () => {
    cy.visit("/");
    cy.get("figcaption").should("contain", "Hacker Escape Rooms");
  });
});
