import user from '../fixtures/user.json'
import loginPage from '../support/pages/LoginPage'
import homePage from "../support/pages/HomePage";
import {login} from "../support/helper";

it('Authorization', () => {
    loginPage.visit();
    loginPage.submitLoginForm(user.email, user.password);

    homePage.getUserProfileButton(user).should('be.visible').and('have.attr', 'href', `/profile/${user.username}`);
})

it('Headless authorization', () => {
    login(user.email, user.password);
    homePage.visit();
    homePage.getUserProfileButton(user).should('be.visible').and('have.attr', 'href', `/profile/${user.username}`);
})