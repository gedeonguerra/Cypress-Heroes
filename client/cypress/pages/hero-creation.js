class NewHero {
    // Define a lista de seletores CSS usados na página
    selectorsList() {
        const selectors = {
            creationButton: ".text-white",         // Botão para criar novo herói
            userName: "[name='name']",             // Campo de entrada do nome
            heroPrice: "[name='price']",           // Campo de preço
            fans: "[name='fans']",                 // Campo de fãs
            saves: "[name='saves']",               // Campo de salvamentos
            power: "[name='powers']",             // Dropdown de poderes
            avatarFile: "[type='file']",           // Upload de avatar
            submitButton: ".text-center",          // Botão de submissão
            checkNewHero: "[data-cy='hero-card']", // Elemento que mostra novo herói
            mensageError: ".text-red-500"          // Mensagens de erro de validação
        }
        return selectors 
    }

    // Fluxo de criação de herói com dados válidos
    creatingHero() {
        // Clica no botão para iniciar criação
        cy.get(this.selectorsList().creationButton).click()
        
        // Preenche o formulário com dados válidos
        cy.get(this.selectorsList().userName).type('PowerRanger')  // Nome do herói
        cy.get(this.selectorsList().heroPrice).type('1')            // Preço
        cy.get(this.selectorsList().fans).type('0')                 // Fãs
        cy.get(this.selectorsList().saves).type('0')                // Salvamentos
        cy.get(this.selectorsList().power).select('Flying')         // Seleciona poder
        
        // Submete o formulário (usa o 4º botão com essa classe)
        cy.get(this.selectorsList().submitButton).eq(3).click()
    }

    // Fluxo de criação de herói com falha (dados inválidos)
    creatingHeroFail() {
        // Clica no botão para iniciar criação
        cy.get(this.selectorsList().creationButton).click()
        
        // Simula interação incompleta com os campos
        cy.get(this.selectorsList().userName).click()    // Clica mas não digita
        cy.get(this.selectorsList().heroPrice).click()   // Clica mas não digita
        cy.get(this.selectorsList().fans).click()        // Clica mas não digita
        cy.get(this.selectorsList().saves).click()       // Clica mas não digita
        
        // Tenta submeter formulário incompleto
        cy.get(this.selectorsList().submitButton).eq(3).click()
    }

    // Verifica se o novo herói foi criado corretamente
    addNewHero() {
        // Confirma se o card do herói contém o nome esperado
        cy.get(this.selectorsList().checkNewHero).should('contain', 'PowerRanger')
    }

    // Valida mensagens de erro de campos obrigatórios
    checkMensageAlert() {
        // Verifica sequência de mensagens de erro esperadas
        cy.get(this.selectorsList().mensageError).eq(0).should('contain', 'Name is required')
        cy.get(this.selectorsList().mensageError).eq(1).should('contain', 'Price is required')
        cy.get(this.selectorsList().mensageError).eq(2).should('contain', 'Fans is required')
        cy.get(this.selectorsList().mensageError).eq(3).should('contain', 'Saves is required')
        cy.get(this.selectorsList().mensageError).eq(4).should('contain', 'Powers is required')
    }
}

export default NewHero
