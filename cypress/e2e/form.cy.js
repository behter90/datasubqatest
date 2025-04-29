import SubmitForm from "../pages/SubmitForm";
import {slowCypressDown} from "cypress-slow-down";
describe('Тест формы Request A Quote', () => {
    beforeEach(()=> {
        SubmitForm.visit()
    })
    it ('Успешная отправка формы с корректными данными формы', () => {
        slowCypressDown(1000)
        SubmitForm.fillName('tester')
        SubmitForm.fillEmail('test@test.com')
        cy.get('select').select(1).invoke('val').should('eq', 'B Service')
        SubmitForm.fillMessage('test message')
        SubmitForm.submit()
        SubmitForm.checkSuccessMessage('Форма отправлена.')

    })
    it ('Неуспешная отправка формы с корректными данными формы', () => {
        slowCypressDown(1000)
        SubmitForm.fillName('tester')
        SubmitForm.fillEmail('test@test.com')
        cy.get('select').select(0).invoke('val').should('eq', 'A Service')
        SubmitForm.fillMessage('test message')
        SubmitForm.submit()
        SubmitForm.checkSuccessMessage('Форма отправлена.')

    })

})
