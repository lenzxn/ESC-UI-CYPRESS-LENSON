describe("Bokning", () => {
  it("visar felmeddelande om användaren försöker gå vidare utan datum", () => {
    cy.visit("/features.html");

    cy.contains("Book this room").first().click();

    cy.get("#booking-overlay").should("be.visible");
    cy.get("#booking-next-1").click();

    cy.get("#booking-error").should(
      "contain",
      "Välj ett datum innan du går vidare.",
    );
  });
});

describe("Bokning", () => {
  it("visar felmeddelande om användaren försöker gå vidare utan datum", () => {
    cy.visit("/features.html");

    cy.contains("Book this room").first().click();

    cy.get("#booking-overlay").should("be.visible");
    cy.get("#booking-next-1").click();

    cy.get("#booking-error").should(
      "contain",
      "Välj ett datum innan du går vidare.",
    );
  });

  it("visar felmeddelande om användaren väljer ett datum som redan passerat", () => {
    cy.visit("/features.html");

    cy.contains("Book this room").first().click();

    cy.get("#booking-overlay").should("be.visible");
    cy.get("#booking-date").type("2024-01-01");
    cy.get("#booking-next-1").click();

    cy.get("#booking-error").should(
      "contain",
      "Du kan inte välja ett datum som redan har passerat.",
    );
  });
});
