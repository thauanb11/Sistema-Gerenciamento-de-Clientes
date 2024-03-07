# Sistema de Gerenciamento de Clientes

# Descrição
Uma plataforma para gerenciar clientes em uma empresa de limpeza residencial. 
Este projeto se divide em duas partes principais: o backend, responsável pela lógica do servidor usando Node.js, e o frontend, 
construído com React para a interface do usuário. No backend, encontramos subpastas para configurações, modelos de dados e rotas,
enquanto o frontend possui diretórios para componentes React, recursos estáticos e o ponto de entrada da aplicação.
O arquivo .gitignore contribui para manter o repositório limpo, excluindo itens desnecessários, 
e a LICENSE estabelece os termos de uso do projeto. Essa estrutura eficiente facilita o entendimento e a colaboração no desenvolvimento.

Em resumo, a organização do código simplifica o processo de desenvolvimento, oferecendo clareza e praticidade.


# Versões das Ferramentas Utilizadas
Node.js: v14.17.0
PostgreSQL: v13.3
React: v17.0.2


## Como Rodar Localmente

### Requisitos
- Node.js (v14.17.0 ou superior)
- PostgreSQL (v13.3 ou superior)

### Passos para Configuração

1. **Clonar o repositório:**
 git clone https://github.com/seu-usuario/sistema-gerenciamento-clientes.git

 cd sistema-gerenciamento-clientes

3. **Instalar Dependências do Backend:**
   
       - cd backend
   
       - npm install

   **Instalar Dependências do Frontend:**
 
       - cd frontend
 
       - npm install

 4. **Configurar Banco de Dados:**
    
Crie um banco de dados PostgreSQL chamado sistema_gerenciamento_clientes.

Configure as credenciais no arquivo backend/config/database.js.

5. **Inicializar o Projeto:**
   
  **Backend:**
   
      - cd backend
   
      - npm start
   
  **FrontEnd:**

      - cd frontend
  
      - npm start

7. **Acesse http://localhost:3000 para visualizar a aplicação.**
***********************************************************


**Licença**

Este projeto é licenciado sob a Mozilla Public License, versão 2.0 - consulte o arquivo LICENSE para obter detalhes.

**Contato**

Para dúvidas ou sugestões, entre em contato: thauanb.dev@gmail.com
