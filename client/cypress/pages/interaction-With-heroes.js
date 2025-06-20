class Interaction {
    // Define um conjunto de seletores CSS para interagir com elementos da página
    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",        // Botão de curtir herói
            hireButton: "[data-cy='money']",       // Botão para contratar herói
            editButton: "[data-cy='pencil']",      // Botão de edição
            deleteButton: "[data-cy='trash']",     // Botão de exclusão
            checkFans: "[data-cy='fans']",         // Elemento que mostra contagem de fãs
            checkSaves: "[data-cy='saves']",       // Elemento que mostra contagem de salvamentos
            confirm: ".bg-red-600",                // Botão de confirmação (ex: em modais)
            creationButton: ".text-white",         // Botão para criar novo herói
            userName: "[name='name']",             // Campo de nome do herói
            heroPrice: "[name='price']",           // Campo de preço
            fans: "[name='fans']",                 // Campo de fãs
            saves: "[name='saves']",               // Campo de salvamentos
            power: "[name='powers']",              // Dropdown de poderes
            submitButton: "button"                 // Botões genéricos (precisa de indexação)
        }
        return selectors
    }

    // Realiza interações básicas com um herói (curtir e contratar)
    interacting() {
        // Clica no 8º botão like (índice 7) e verifica contagem de fãs
        cy.get(this.selectorsList().likeButton).eq(7).click()
        cy.get(this.selectorsList().checkFans).should('contain', '1')

        // Clica no 8º botão hire, confirma ação e verifica salvamentos
        cy.get(this.selectorsList().hireButton).eq(7).click()
        cy.get(this.selectorsList().confirm).click()
        cy.get(this.selectorsList().checkSaves).should('contain', '1')
    }

    // Edita as informações de um herói existente
    editHero() {
        // Seleciona o 8º herói na lista para edição
        cy.get(this.selectorsList().editButton).eq(7).click()
        
        // Limpa e preenche novos valores nos campos
        cy.get(this.selectorsList().userName).clear().type('Kenkai')         // Novo nome
        cy.get(this.selectorsList().heroPrice).clear().type('100')           // Novo preço
        cy.get(this.selectorsList().fans).clear().type('100')                // Nova contagem de fãs
        cy.get(this.selectorsList().saves).clear().type('100')               // Nova contagem de salvamentos
        cy.get(this.selectorsList().power).select('Super Speed')             // Novo poder
        
        // Submete o formulário (usa o 4º botão disponível)
        cy.get(this.selectorsList().submitButton).eq(3).click()
    }

    // Exclui um herói específico
    deleteHero() {
        // Seleciona o 8º herói na lista para exclusão
        cy.get(this.selectorsList().deleteButton).eq(7).click()
        
        // Confirma a exclusão no modal/dialog
        cy.get(this.selectorsList().confirm).click()
    }
}

export default Interaction
