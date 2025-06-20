import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'

// Instância da página de login para reutilização dos métodos
const loginPage = new LoginPage()

// Suite de testes para login bem-sucedido
describe('feature login - Success', () => {
    it('login - Success', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com credenciais válidas
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        // Verifica se o login foi bem-sucedido
        loginPage.checkLoginSuccess()
    })
})

// Suite de testes para login com falha (credenciais inválidas)
describe('feature login - Fail', () => {
    it('login - Fail', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Tenta login com credenciais inválidas
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        // Verifica se a mensagem de falha no login foi exibida
        loginPage.checkLoginFail()
    })
})
