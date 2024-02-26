import BasePage from "./BasePage";

class HomePage extends BasePage{
    constructor() {
        super();
        this.elements = {};
        this.tags = 'a.tag-pill';
    }

    visit() {
        cy.log('Opening home page...')
        cy.visit('/');
    }

    getTagPills(){
        return cy.get(this.tags);
    }

}

export default new HomePage();
