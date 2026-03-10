describe("Startsidan", () => {
  it("laddar startsidan", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  it("visar statisk text på startsidan", () => {
    cy.visit("/");
    cy.get("figcaption").should("contain", "Hacker Escape Rooms");
  });
});
