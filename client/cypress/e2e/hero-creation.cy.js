import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'
import NewHero from '../pages/hero-creation'

 const loginPage = new LoginPage()
 const newHero = new NewHero()

 describe('feature creation New Hero', () => {
    it('creation - Success', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkLoginSuccess()

        newHero.creatingHero()
        newHero.addNewHero()
    })
 })


 describe('feature creation New Hero', () => {
    it('creation - Fail', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkLoginSuccess()

        newHero.creatingHeroFail()
        newHero.checkMensageAlert()
    })
 })
