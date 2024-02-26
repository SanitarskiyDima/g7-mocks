import user from '../fixtures/user.json'
import homePage from "../support/pages/HomePage";
import {login} from "../support/helper";
import tagsMock from '../fixtures/tagsMock.json';

it('User can see tags on home page', () => {
    cy.intercept('GET', '**tags**', tagsMock).as('tags');
    // cy.intercept('**tags**').as('tags');

    login(user.email, user.password);
    homePage.visit();
    cy.wait('@tags');

    homePage.getUserProfileButton(user).should('be.visible').and('have.attr', 'href', `/profile/${user.username}`);

    tagsMock.tags.forEach((tag, index) => {
        homePage
            .getTagPills()
            .eq(index)
            .should('be.visible')
            .and('have.text', tag);
    })
})


