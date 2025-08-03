const dayjs = require('dayjs');

describe('Teste de Agendamento de Coleta', () => {
  it('Deve preencher e enviar o formulário com sucesso, incluindo telefone e email', () => {
    cy.visit('http://127.0.0.1:5500/frontend/agendamento.html');

    cy.get('#nome').type('Tiago Teste');
    cy.get('#endereco').type('Rua do Teste, 123');
    // O value no select é em minúsculo, então deve selecionar 'plástico'
    cy.get('#tipo_material').select('plástico');

    const dataFutura = dayjs().add(1, 'day').format('YYYY-MM-DD');
    cy.get('#data_agendamento').type(dataFutura);

    cy.get('#telefone').type('(83) 99999-9999'); // telefone obrigatório
    cy.get('#email').type('tiago@teste.com');   // email opcional

    cy.get('form').submit();

    cy.get('#successMsg', { timeout: 8000 }).should('contain', 'sucesso');
  });
});


