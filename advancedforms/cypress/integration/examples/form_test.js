describe("AdvancedForm App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const checkBoxInput = () => cy.get('[type="checkbox"]').check();
  const submitButton = () => cy.get("button[id=button]");

  it("the proper elements should be showing", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    checkBoxInput().should("exist");
    submitButton().should("exist");
  });

  it("submit button starts out disabled", () => {
    submitButton().should("be.disabled");
  });

  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("John Doe")
      .should("have.value", "John Doe");
    emailInput()
      .should("have.value", "")
      .type("john@gmail.com")
      .should("have.value", "john@gmail.com");
    passwordInput()
      .should("have.value", "")
      .type("password")
      .should("have.value", "password");
  });

  it("can check in and uncheck the inputs", () => {
    checkBoxInput().should("be.checked");

    checkBoxInput();
    //.uncheck()
  });

  it("The submit button enables with all fields are filled out and TOS box is checked", () => {
    nameInput().type("John Doe");
    emailInput().type("john@gmail.com");
    submitButton().should("not.be.disabled");
  });

  describe("Adding a new user", () => {
    it("can submit new user", () => {
      nameInput().type("Jane Joe");
      emailInput().type("jane@gmail.com");
      checkBoxInput().check();
      submitButton().click();
    });
  });
});
