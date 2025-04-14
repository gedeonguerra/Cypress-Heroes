import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.Page'

 const loginPage = new LoginPage()

 describe('feature login', () => {
    it('login - Success', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        loginPage.checkLoginSuccess()
    })
 })

 describe('feature login', () => {
    it('login - Fail', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkLoginFail()
    })
 })