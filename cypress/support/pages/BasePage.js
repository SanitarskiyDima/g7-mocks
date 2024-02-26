export default class BasePage {
    constructor() {
        this.elements = {}
        this.elements.headerNavigationElements = '.navbar .nav-link'
    }

    getUserProfileButton(user){
        return cy.contains(this.elements.headerNavigationElements, user.username);
    }

}