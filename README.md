Sistema de Agendamento de Coleta de Materiais Recicláveis

Este projeto consiste em uma aplicação completa para agendamento de coletas de materiais recicláveis. Ele permite que o cidadão informe dados básicos e agende a coleta do seu material diretamente por meio de um formulário simples e intuitivo. O sistema foi desenvolvido com tecnologias modernas como HTML, CSS, JavaScript, Node.js, Express e banco de dados PostgreSQL. Além disso, conta com testes automatizados usando o Cypress para garantir a qualidade das funcionalidades.

Tecnologias Utilizadas:

HTML5 e CSS3 para a criação da interface do usuário

JavaScript moderno (ES6+) para comportamento dinâmico no frontend

Node.js e Express no backend para criação da API REST

PostgreSQL como banco de dados relacional

Cypress para testes automatizados de ponta a ponta

Day.js para manipulação segura de datas

Funcionalidades do Sistema:

Cadastro de agendamentos de coleta por meio de um formulário web

Validação de campos obrigatórios (nome, endereço, tipo de material, data, telefone)

Restrições de data (não permite agendar coletas para datas passadas)

Armazenamento seguro dos dados no banco de dados PostgreSQL

Mensagens claras de sucesso e erro para o usuário final

Testes automatizados garantindo que o fluxo principal do sistema funcione corretamente

Campos do Formulário:

Nome completo (obrigatório)

Endereço (obrigatório)

Tipo de material reciclável (obrigatório)

Data da coleta (obrigatória e deve ser igual ou maior que a data atual)

Telefone de contato (obrigatório)

E-mail (opcional)

Etapas para Executar Localmente:

Clonar o repositório do projeto

Instalar as dependências com o comando: npm install

Configurar a conexão com o banco PostgreSQL no arquivo de configuração

Criar a tabela no banco com a seguinte estrutura:

CREATE TABLE agendamentos ( id SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, endereco VARCHAR(200) NOT NULL, tipo_material VARCHAR(50) NOT NULL, data_agendamento DATE NOT NULL, telefone VARCHAR(20) NOT NULL, email VARCHAR(100), criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP );

Iniciar o servidor com: npm start

Abrir o arquivo agendamento.html no navegador

Execução de Testes Automatizados:

Instalar o Cypress: npm install cypress --save-dev

Executar os testes com o comando: npx cypress open

Selecionar o teste formulário e aguardar a execução automatizada

Sugestões de Melhorias Futuras:

Painel administrativo para visualização e gerenciamento dos agendamentos

Filtros por data ou tipo de material

Integração com autenticação de usuários

Envio de confirmação por e-mail

Deploy da aplicação em nuvem

Autor do Projeto:

Tiago Sousa