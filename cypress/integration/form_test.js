/*global cy */
describe("Testing our volunteer form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("adds text to  input", function () {
    cy.get('[data-cy="name"]').type("Tatiana").should("have.value", "Tatiana");
    cy.screenshot("my-image");
    cy.get('[data-cy="email"]')
      .type("tatyana@gmail.com")
      .should("have.value", "tatyana@gmail.com");
    cy.get('[data-cy="motivation"]')
      .type("some text")
      .should("have.value", "some text");
    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
    cy.get("[type=checkbox]").check().should("be.checked");
    //cy.contains("Submit").click();
    cy.get("form").submit();
  });
});
