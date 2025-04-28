class SubmitForm {
    constructor () {
        this.nameInput = '#name' // поле Your Name
        this.emailInput = '#email' // поле Your Email
        this.messageInput = '#message' // поле Message
        this.serviseSelect = 'select' // поле Select A Service
        this.requestButton = 'Request A Quote' // кнопка Request A Quote
        this.successMessage = '#formStatus' //сообщение об успешной отправке формы

}
    visit() {
        cy.visit('https://qatest.datasub.com/')
    }
    fillName (name) {
        cy.get(this.nameInput).type(name)
    }
    fillEmail (email) {
        cy.get(this.emailInput).type(email)
    }
    fillMessage (message) {
        cy.get(this.messageInput).type(message)
    }

    submit() {
        cy.contains (this.requestButton).click()
    }
    checkSuccessMessage (expectMessage){
    cy.get(this.successMessage).should('contain', expectMessage)
    }
    selectService (service) {
        cy.get(this.serviseSelect).select(1).invoke('val').should('eq', service)
    }
}
    export default new SubmitForm()