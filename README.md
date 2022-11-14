# vuejs-crud

## Instalação

Após clonar o repositório, abra o terminal dentro do diretório da pasta 'client' e 'server', executando em ambos o comando abaixo para baixar as dependências necessárias

```javascript
npm install
```
Ainda no terminal da pasta 'server' execute os comandos abaixo para executar as Migrations e em seguida as Seeds do banco de dados.

```javascript
npx sequelize-cli db:migrate
```

```javascript
npx sequelize-cli db:seed:all
```

Execute o comando a seguir para iniciar a API

```javascript
npm start
```
Ou

```javascript
node server.js
```

No terminal do 'client' execute:

```javascript
npm start
```

Abra o o navegador e digite: 
```javascript
http://localhost:8080
```

Credenciais de acesso:
- john@mail.com
- senhaFraca

