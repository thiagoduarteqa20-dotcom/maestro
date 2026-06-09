# Regressivo Automação Cypress

Projeto de automação de testes utilizando Cypress.

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de que possui instalado:

* Node.js (versão 18 ou superior recomendada)
* NPM (instalado junto com o Node.js)
* Git

### Verificar instalações

```bash
node -v
npm -v
git --version
```

## 🚀 Clonando o Projeto

Clone o repositório para sua máquina:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

Acesse a pasta do projeto:

```bash
cd Regressivo_Automacao_cypress
```

## 📦 Instalando Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

Caso o Cypress não seja instalado automaticamente:

```bash
npm install cypress --save-dev
```

## ▶️ Executando os Testes

### Abrir interface gráfica do Cypress

```bash
npx cypress open
```

### Executar todos os testes via terminal

```bash
npx cypress run
```

### Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## 📁 Estrutura do Projeto

```text
Regressivo_Automacao_cypress/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│
├── cypress.config.js
├── package.json
└── README.md
```

## 🔧 Atualizando Dependências

Para atualizar os pacotes:

```bash
npm update
```

## 🛠️ Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Git

## 👨‍💻 Boas Práticas

* Sempre mantenha a branch principal atualizada.
* Crie uma branch para cada nova funcionalidade ou correção.
* Execute os testes antes de abrir um Pull Request.
* Mantenha os cenários e massas de teste organizados.

## 📞 Suporte

Em caso de dúvidas ou problemas na configuração do ambiente, entre em contato com o responsável pelo projeto.
