# APP

## REQUISITOS FUNCIONAIS

- [] Deve ser possível realizar o cadastro de usuário
- [] Deve ser possível realizar a autenticação do usuário
- [] Deve ser possível obter o perfil do usuário logado
- [] Deve ser possível obter o número de check-ins do usuário logado
- [] Deve ser possível obter seu histórico de check-ins
- [] Deve ser possível o usuário buscar academias próximas à sua localizacao atual
- [] Deve ser possível o usuário buscar academias pelo nome
- [] Deve ser possível o usuário realizar check-in em uma academia
- [] Deve ser possível validar o check-in de um usuário
- [] Deve ser possível cadastrar uma academia

## REGRAS DE NEGÓCIO

- [] O Usuário não deve poder se cadastrar com um e-mail já em uso por outra conta
- [] O Usuário não pode realizar 02 check-ins no mesmo dia
- [] O Usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O Check-in só pode ser validado em até 20 minutos após criado
- [] O Check-in só pode ser validado por administradores
- [] Uma academia só pode ser cadastrada por um administrador

## REQUISITOS NAO FUNCIONAIS

- [] A senha do usuário precisa está criptografada
- [] Os Dados da aplicação precisa está persistido em um banco de dados (postgreSQL)
- [] Todas as listas de dados precisam estar paginadas com 20 itens por pagina
- [] O usuário deve ser identificado por um JWT (Json Web Token)

## DEPENDENCIAS DE DEV DA APP

- npm i typescript @types/node tsx tsup -D (npx tsc --init -> gera o tsconfig.json)
- npm i eslint @rocketseat/eslint-config -D
- npm i prisma -D (npx prisma init [ after ] => npx prisma generate -> para tipar as tabelas [ after ] -> npx prisma migrate dev (cria as migrations no banco))

## DEPENDENCIAS DE PRD DA APP

- npm i fastify
- npm i @prisma/client

## INICIALIZAR A IMG DO PG-BITNAMI NO DOCKER

- docker run --name gympass-api-pg -e POSTGRESQL_USER=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=gympass-api-db -p 5432:5432 bitnami/postgresql
