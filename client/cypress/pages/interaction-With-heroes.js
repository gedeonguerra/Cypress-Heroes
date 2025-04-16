class Interaction {
    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",
            hireButton: "[data-cy='money']",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']",
            checkFans: "[data-cy='fans']",
            checkSaves: "[data-cy='saves']",
            confirm: ".bg-red-600", 
            creationButton: ".text-white",
            userName: "[name='name']",
            heroPrice: "[name='price']",
            fans: "[name='fans']",
            saves: "[name='saves']",
            power: "[name='powers']",
            submitButton: "button"

        }
        return selectors
    }

    interacting() {

        cy.get(this.selectorsList().likeButton).eq(7).click()
        cy.get(this.selectorsList().checkFans).should('contain', '1')

        cy.get(this.selectorsList().hireButton).eq(7).click()
        cy.get(this.selectorsList().confirm).click()
        cy.get(this.selectorsList().checkSaves).should('contain', '1')

    }

    editHero() {
        cy.get(this.selectorsList().editButton).eq(7).click()

        
        cy.get(this.selectorsList().userName).clear().type('Kenkai')
        cy.get(this.selectorsList().heroPrice).clear().type('100')
        cy.get(this.selectorsList().fans).clear().type('100')
        cy.get(this.selectorsList().saves).clear().type('100')
        cy.get(this.selectorsList().power).select('Super Speed')
        cy.get(this.selectorsList().submitButton).eq(3).click()
    }

    deleteHero() {

        cy.get(this.selectorsList().deleteButton).eq(7).click()
        cy.get(this.selectorsList().confirm).click()
    }
}
export default Interaction