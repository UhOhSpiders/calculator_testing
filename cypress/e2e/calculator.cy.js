describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('display should update running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain','22')
  })

  it('do opperators work?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','4')
  })

  it('can multiple operator be chained?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','2')
  })

  it('is output as expected for positive numbers?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','2')
  })

  it('is output as expected for negative numbers?', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','-2')
  })

  it('is output as expected for decimals?', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','2.5')
  })

  it('is output as expected for v large numbers?', () => {
    cy.get('#number9').click();
    cy.get('#number9').click(); 
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain','9999999')
  })

  it('divide by zero?', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','YOU CANNOT DIVIDE BY ZERO')
  })


  // TICK Do the number buttons update the display of the running total?
  // TICK Do the arithmetical operations update the display with the result of the operation?
  // TICK E.g. does 2 + 2 - update the display to 4
  // TICK Can multiple operations be chained together?
  // TICK E.g. does 3 + 1 - 2 == 2
  // TICK Is the output as expected for positive numbers
  // TICK Is the output as expected for negative numbers
  // TICK Is the output as expected for decimal numbers
  // TICK Is the output as expected for very large numbers
  // TICK What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

})