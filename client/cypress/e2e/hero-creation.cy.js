import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'
import NewHero from '../pages/hero-creation'

// Instanciando as classes de página para reutilização dos métodos
const loginPage = new LoginPage()
const newHero = new NewHero()

// Suite de testes para criação de novo herói com sucesso
describe('feature creation New Hero - Success Scenario', () => {
    it('creation - Success', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()

        // Realiza login com credenciais válidas
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Verifica se login foi bem-sucedido
        loginPage.checkLoginSuccess()

        // Preenche e envia os dados para criação do novo herói
        newHero.creatingHero()
        newHero.addNewHero()
    })
})

// Suite de testes para criação de novo herói com falha (ex: dados incompletos ou inválidos)
describe('feature creation New Hero - Failure Scenario', () => {
    it('creation - Fail', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()

        // Realiza login com credenciais válidas
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Verifica se login foi bem-sucedido
        loginPage.checkLoginSuccess()

        // Tenta criar um herói com dados incorretos ou incompletos
        newHero.creatingHeroFail()

        // Verifica se uma mensagem de erro (alerta) foi exibida corretamente
        newHero.checkMensageAlert()
    })
})
