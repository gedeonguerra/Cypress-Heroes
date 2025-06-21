# 🤼‍♂️ Cypress Heroes Demo Application

Bem-vindo ao **Cypress Heroes**, uma aplicação demo construída para mostrar como realizar testes **End-to-End**, **Componentes** e **API** utilizando o [Cypress](https://www.cypress.io/)! 🚀

> Esta aplicação serve como laboratório para aprendizado, testes e automação utilizando uma stack moderna com React + NestJS + Prisma.

---

## 📦 Tecnologias Utilizadas

* ♋️ **React** com [Vite](https://vitejs.dev/) – Frontend moderno e rápido
* 👥 **NestJS** – Backend escalável em Node.js
* 🔀 **Prisma** – ORM para interagir com banco de dados
* 🧪 **Cypress** – Testes E2E, de componentes e API
* 📦 **NPM Workspaces** – Gerenciamento de monorepo

---

## 🚀 Começando

Clone o projeto e instale as dependências no diretório raiz:

```bash
git clone https://github.com/gedeonguerra/Cypress-Heroes.git
cd Cypress-Heroes
npm install
```

### ⚙️ Setup Inicial

Prepare o ambiente (incluindo o banco de dados) com:

```bash
npm run setup
```

### 💻 Ambiente de Desenvolvimento

Inicie a aplicação localmente com:

```bash
npm run dev
```

A aplicação estará disponível em:
📍 `http://localhost:3000`

---

## 🧭 Estrutura da Aplicação

```
Cypress-Heroes/
├── client/   → Aplicação React (frontend)
├── server/   → API com NestJS + Prisma
├── cypress/  → Testes automatizados
└── ...
```

### 💽 Client App (React)

* Local: `client/`
* Construída com [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* Comunica-se com a API via variável `VITE_API_URL`

📌 *Em breve*: documentação mais detalhada sobre a interface e componentes.

### 🧠 Server App (NestJS)

* Local: `server/`
* Estruturada com [NestJS](https://nestjs.com/)
* ORM: [Prisma](https://www.prisma.io/)

#### 📂 Banco de Dados

* O banco é configurado e populado com dados iniciais através do script `server/prisma/seed.ts`.

Para resetar o banco de dados ao estado inicial:

```bash
npm run resetdb
```

---

## 🌐 Variáveis de Ambiente

A variável principal utilizada no frontend é:

| Variável       | Descrição                                  | Default                 |
| -------------- | ------------------------------------------ | ----------------------- |
| `VITE_API_URL` | URL da API utilizada pelo frontend (React) | `http://localhost:3001` |

> Para outros ambientes (ex: produção), certifique-se de sobrescrever corretamente essa variável.

---

## 🧪 Rodando os Testes

Execute os testes do Cypress com:

```bash
npx cypress open
```

Ou em modo headless (ideal para CI/CD):

```bash
npx cypress run
```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com sugestões, melhorias ou correções.

---



