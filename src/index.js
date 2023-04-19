import express, { request, response } from 'express';

import { ListaCidades } from './controllers/cidade/ListaCidades.js';
import { CadastrarCidade } from './controllers/cidade/CadastrarCidade.js';
import { DeleteCidade } from './controllers/cidade/DeleteCidade.js';
import { ListaBairros } from './controllers/bairros/ListaBairros.js';
import { CadastrarBairro } from './controllers/bairros/CadastrarBairro.js';
import { DeleteBairro } from './controllers/bairros/DeleteBairro.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // dentro do '*' pode ria ser qual site poderia fazer a requisiçao.
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  );

  next();
});

app.listen(8000, () => {
  console.log('Servidor aberto na porta 8000');
});

app.get('/api/ping', (request, response) => {
  return response.send({
    message: 'API funcionando',
  });
});

//Endpoint Cidades

app.get('/api/cidades', ListaCidades);

app.post('/api/cidades', CadastrarCidade);

app.delete('/api/cidades/:id', DeleteCidade);

//Endpoint Bairros

app.get('/api/bairros', ListaBairros);

app.post('/api/bairros', CadastrarBairro);

app.delete('/api/bairros/:id', DeleteBairro);
