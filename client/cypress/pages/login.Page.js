class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: "nav",
            emailField: "[type='email']",
            passwordField: "[type='password']",
            submitButton : ".text-white",
            check: "[href='/heroes/new']",
            wrongCredentialAlert: ".shadow-lg"

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/heroes')
    }

    loginWithUser(username, password) {

        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().submitButton).click()
        
    }

    checkLoginSuccess() {
        cy.get(this.selectorsList().check).should('contain', 'Create New Hero')
    }

    checkLoginFail() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('contain', 'Invalid email or password')
    }
}
export default LoginPage