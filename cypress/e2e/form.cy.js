import SubmitForm from "../pages/SubmitForm";
describe('Тест формы Request A Quote', () => {
    beforeEach(()=> {
        //cy.visit('https://qatest.datasub.com/')
        SubmitForm.visit()
    })
    it ('Успешная отправка формы с корректными данными', () => {
        //cy.get('#name').type('tester')
        SubmitForm.fillName('tester')
        //cy.get('#email').type('test@test.com')
        SubmitForm.fillEmail('test@test.com')
        //cy.get('select').select(1).invoke('val').should('eq', 'B Service')
        SubmitForm.selectService('B Service')
        //cy.get('#message').type('test message')
        SubmitForm.fillMessage('test message')
        //cy.contains ('Request A Quote').click()
        SubmitForm.submit()
        //cy.get('#formStatus').should('contain', 'Форма отправлена.')
        SubmitForm.checkSuccessMessage('Форма отправлена.')

    })


})