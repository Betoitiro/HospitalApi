🏥 HospitalAPI
Projeto Fullstack desenvolvido como parte do portfólio profissional.
A proposta é criar uma aplicação de gerenciamento hospitalar, com recursos para cadastrar pacientes, médicos, exames e agendar consultas de forma eficiente.

O sistema é dividido em duas partes:

Back-end (API REST) em Java Spring Boot

Front-end em React

Com uso de Docker e banco de dados PostgreSQL

✅ Funcionalidades implementadas:
📄 Página inicial com visual amigável

👨‍⚕️ Cadastro de médicos e pacientes

🧪 Cadastro e listagem de exames

📅 Agendamento de consultas

🔍 Consulta e edição de registros

💾 Integração com banco de dados PostgreSQL

🚀 Como executar o projeto
Pré-requisitos:
Docker e Docker Compose instalados

Execução via Docker:
bash
Copiar
Editar
docker-compose up --build
O frontend estará disponível em:

arduino
Copiar
Editar
http://localhost:3000
A API (backend) estará em:

arduino
Copiar
Editar
http://localhost:8080
🧱 Estrutura do projeto
bash
Copiar
Editar
HospitalApi/
├── backend/             # Java Spring Boot API
│   ├── src/main/java/
│   └── Dockerfile
│
├── frontend/            # Aplicação React
│   ├── src/
│   └── Dockerfile
│
├── docker-compose.yml   # Orquestração de serviços
└── README.md
🔧 Tecnologias utilizadas
Back-end:
Java 17

Spring Boot

Maven

PostgreSQL

JPA/Hibernate

Front-end:
React

Axios

React Router

Bootstrap

DevOps:
Docker

Docker Compose

📦 Dependências importantes
Backend:
bash
Copiar
Editar
Java, Spring Boot, PostgreSQL, Maven
Frontend:
bash
Copiar
Editar
npm i
npm i axios react-router-dom bootstrap
