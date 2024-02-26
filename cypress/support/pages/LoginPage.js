import BasePage from "./BasePage";

class LoginPage extends BasePage{
    constructor() {
        super();
        this.elements = {};
        this.elements.emailInputField = 'input[type="email"]';
        this.elements.passwordInputField = 'input[type="password"]';
        this.elements.submitButton = 'button[type="submit"]';
    }

    visit(){
        cy.log('Opening login page...')
        cy.visit('/user/login');
    }

    getEmailInputField(){
        return cy.get(this.elements.emailInputField);
    }

    getPasswordInputField(){
        return cy.get(this.elements.passwordInputField);
    }

    getSubmitButton(){
        return cy.get(this.elements.submitButton);
    }

    submitLoginForm(email, password){
        cy.log('Fill in login fields');
        this.getEmailInputField().type(email);
        this.getPasswordInputField().type(password);

        cy.log('Submit login form');
        this.getSubmitButton().click();
    }
} export default new LoginPage();