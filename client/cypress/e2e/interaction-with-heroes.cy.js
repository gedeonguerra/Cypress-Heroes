import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'
import Interaction from '../pages/interaction-With-heroes'

 const loginPage = new LoginPage()
 const interaction = new Interaction()

describe('feature interaction', () => {
    it('interaction With Heroes', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkLoginSuccess()

        interaction.interacting()
        interaction.editHero()

        interaction.deleteHero()

    })
 })
