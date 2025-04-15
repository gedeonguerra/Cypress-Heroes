class NewHero {
    selectorsList() {
        const selectors = {
            creationButton: ".text-white",
            userName: "[name='name']",
            heroPrice: "[name='price']",
            fans: "[name='fans']",
            saves: "[name='saves']",
            power: "[name='powers']",
            avatarFile: "[type='file']",
            submitButton: ".text-center",
            checkNewHero: "[data-cy='hero-card']",
            mensageError: ".text-red-500"

        }
        return selectors 
    }

    creatingHero() {
        cy.get(this.selectorsList().creationButton).click()
        cy.get(this.selectorsList().userName).type('PowerRanger')
        cy.get(this.selectorsList().heroPrice).type('1')
        cy.get(this.selectorsList().fans).type('0')
        cy.get(this.selectorsList().saves).type('0')
        cy.get(this.selectorsList().power).select('Flying')
        cy.get(this.selectorsList().submitButton).eq(3).click()


    }

    creatingHeroFail() {
        cy.get(this.selectorsList().creationButton).click()
        cy.get(this.selectorsList().userName).click()
        cy.get(this.selectorsList().heroPrice).click()
        cy.get(this.selectorsList().fans).click()
        cy.get(this.selectorsList().saves).click()
        cy.get(this.selectorsList().submitButton).eq(3).click()


    }

    addNewHero() {

        cy.get(this.selectorsList().checkNewHero).should('contain', 'PowerRanger')

    }

    checkMensageAlert() {
        cy.get(this.selectorsList().mensageError).eq(0).should('contain', 'Name is required')
        cy.get(this.selectorsList().mensageError).eq(1).should('contain', 'Price is required')
        cy.get(this.selectorsList().mensageError).eq(2).should('contain', 'Fans is required')
        cy.get(this.selectorsList().mensageError).eq(3).should('contain', 'Saves is required')
        cy.get(this.selectorsList().mensageError).eq(4).should('contain', 'Powers is required')
    }

}
export default NewHero