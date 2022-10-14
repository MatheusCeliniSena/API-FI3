# API-NODEJS

1) Primeiramente temos que instalar as dependencias
  npm install
  npm install express
  
2) Depois fazer a conexão com o banco de dados postgresql
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'postgres',
    port: '5432'
    
3) Por fim só iniciar a API

  node app.js
  
4) E passar as rotas

  GET:  /getFilmes
  DELETE: /deleteFilmes
