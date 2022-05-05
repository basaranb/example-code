describe("User Interface tests", () => {
  it("lane show/hide", () => {
    cy.visit("localhost:3000");
    cy.isInViewport("[data-test-id=lane-wrapper]");
    cy.get("body").type("{downArrow}");
    cy.wait(500);
    cy.isNotInViewport("[data-test-id=lane-wrapper]");
    cy.get("body").type("{upArrow}");
    cy.wait(500);
    cy.isInViewport("[data-test-id=lane-wrapper]");
  });

  it("pause and play the video", () => {
    cy.visit("localhost:3000");
    cy.get("body").type("{downArrow}");
    cy.wait(500);
    cy.isNotInViewport("[data-test-id=lane-wrapper]");
    cy.get("video").should("have.prop", "paused", false).and("have.prop", "ended", false);
    cy.get(`[data-test-id="toggle-play-button"]`).click();
    cy.get("video").should("have.prop", "paused", true).and("have.prop", "ended", false);
  });

  it.only("check lane scrolling", () => {
    cy.visit("localhost:3000");
    cy.get("body").type("{rightArrow}");
    cy.get("body").type("{rightArrow}");
    cy.wait(500);
    cy.get("[data-test-id=lane-visible]")
      .invoke("scrollLeft")
      .should("equal", 2 * 350);
    cy.get("body").type("{rightArrow}");
    cy.get("[data-test-id=lane-visible]")
      .invoke("scrollLeft")
      .should("equal", 3 * 350);
  });
});
