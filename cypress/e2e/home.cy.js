describe("Startsidan", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("laddar startsidan", () => {
    cy.get("body").should("be.visible");
  });

  it("visar statisk text på startsidan", () => {
    cy.get("figcaption").should("contain", "Hacker Escape Rooms");
  });
});
