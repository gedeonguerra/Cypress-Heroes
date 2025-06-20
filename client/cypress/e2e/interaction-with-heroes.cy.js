import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'
import Interaction from '../pages/interaction-With-heroes'

// Instancia as páginas de login e interação com heróis
const loginPage = new LoginPage()
const interaction = new Interaction()

// Suite de testes para interações com heróis (edição e remoção)
describe('feature interaction', () => {
    it('interaction With Heroes', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()

        // Realiza login com credenciais válidas
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Verifica se o login foi bem-sucedido
        loginPage.checkLoginSuccess()

        // Inicia interação com heróis (ex: visualização ou acesso ao módulo de heróis)
        interaction.interacting()

        // Edita um herói existente
        interaction.editHero()

        // Exclui um herói existente
        interaction.deleteHero()
    })
})
