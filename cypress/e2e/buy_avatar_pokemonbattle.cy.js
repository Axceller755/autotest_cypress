import * as data from "../helpers/default_data_pokemonbattle.json"

describe('Тест покупки аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[id="k_email"]').type(data.login);
         cy.get('input[id="k_password"]').type(data.password);
         cy.get('button[type="submit"]').click();
         cy.wait(2000);
         cy.get('.header_card_trainer').click();
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
         cy.get('.available > button').first().click();
         cy.get('.card_number').type(data.card_number);
         cy.get('.card_csv').type(data.csv);
         cy.get('.card_date').type(data.card_date);
         cy.get('.card_name').type(data.card_user_name);
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.threeds_number').type(data.card_success_code);
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });