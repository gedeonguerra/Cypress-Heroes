class LoginPage {
    // Define os seletores CSS para elementos-chave da página de login
    selectorsList() {
        const selectors = {
            loginButton: "nav",                     // Botão de login na barra de navegação
            emailField: "[type='email']",           // Campo de entrada de e-mail
            passwordField: "[type='password']",     // Campo de entrada de senha
            submitButton: ".text-white",            // Botão de submissão do formulário
            check: "[href='/heroes/new']",          // Elemento para verificar login bem-sucedido (link de criação)
            wrongCredentialAlert: ".shadow-lg"      // Elemento de alerta para credenciais inválidas
        }
        return selectors
    }
    
    // Acessa a página inicial onde o login será realizado
    accessLoginPage() {
        cy.visit('http://localhost:3000/heroes')  // Visita a URL diretamente
    }

    // Executa o fluxo completo de login com credenciais
    loginWithUser(username, password) {
        // Clica no botão de login para abrir o formulário
        cy.get(this.selectorsList().loginButton).click()
        
        // Preenche o campo de e-mail com o username fornecido
        cy.get(this.selectorsList().emailField).type(username)
        
        // Preenche o campo de senha com a password fornecida
        cy.get(this.selectorsList().passwordField).type(password)
        
        // Submete o formulário de login
        cy.get(this.selectorsList().submitButton).click()
    }

    // Verifica se o login foi bem-sucedido
    checkLoginSuccess() {
        // Confirma a presença do elemento exclusivo da área logada
        cy.get(this.selectorsList().check).should('contain', 'Create New Hero')
    }

    // Verifica tentativa de login com credenciais inválidas
    checkLoginFail() {
        // Confirma a exibição da mensagem de erro esperada
        cy.get(this.selectorsList().wrongCredentialAlert)
          .should('contain', 'Invalid email or password')
    }
}

export default LoginPage
