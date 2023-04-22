const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor/lib/methods")

Given('I search Online Feature', ()=>{
    cy.visit('http://zero.webappsecurity.com/index.html');

When('I Type Online', ()=>{
    cy.get('#searchTerm').type('online {enter}');

Then('I should see Online Feature', ()=>{
    cy.get('a').should('contain.text','Zero - Free Access to Online Banking');
    cy.get('a').should('contain.text','Zero - Online Statements');
});
});
});