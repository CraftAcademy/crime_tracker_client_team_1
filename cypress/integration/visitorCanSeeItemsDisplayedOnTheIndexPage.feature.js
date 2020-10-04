describe("User can see the Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("by displaying header, picture and footer", () => {
    cy.get("#header-txt").contains("Crime Tracker");
    cy.get("img.index-img").should("be.visible");
  });
});
