describe('Text box with max chracters', () => {
    beforeEach(() => {
        cy.visit('/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

    });
    it('displays the appropriate remaining characters count', () => {


        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15');
            });

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');
        
        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max is exceeded', () => {
 
        cy.get('@charInput').type('welcome to hell for it');

        cy.get('@charInput')
     
        .should('have.attr', 'value', 'welcome to hell');
    })
})