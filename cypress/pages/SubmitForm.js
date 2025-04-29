class SubmitForm {
    constructor () {
        this.nameInput = '#name' // поле Your Name
        this.emailInput = '#email' // поле Your Email
        this.messageInput = '#message' // поле Message
        this.requestButton = 'button' // кнопка Request A Quote
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
        cy.get(this.requestButton).contains('Request A Quote').click()
    }
    checkSuccessMessage (expectMessage){
    cy.get(this.successMessage).should('be.visible', expectMessage)
    }

}
    export default new SubmitForm()
