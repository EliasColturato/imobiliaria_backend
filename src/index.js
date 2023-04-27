import express, { request, response } from 'express';

import { ListaCidades } from './controllers/cidade/ListaCidadesController.js';
import { CadastrarCidade } from './controllers/cidade/CadastrarCidadeController.js';
import { DeleteCidade } from './controllers/cidade/DeleteCidadeController.js';
import { ListaBairros } from './controllers/bairros/ListaBairrosController.js';
import { CadastrarBairro } from './controllers/bairros/CadastrarBairroController.js';
import { DeleteBairro } from './controllers/bairros/DeleteBairroController.js';
import { ListaCasasController } from './controllers/casas/ListaCasasController.js';
import { CadastrarCasasController } from './controllers/casas/CadastrarCasasController.js';
import { DeleteCasasController } from './controllers/casas/DeleteCasasController.js';
import { ListaRuasController } from './controllers/ruas/ListaRuasController.js';
import { CadastrarRuasController } from './controllers/ruas/CadastrarRuasController.js';
import { DeleteRuasController } from './controllers/ruas/DeleteRuasController.js';
import { ListaAnunciosController } from './controllers/tipo_anuncios/ListaAnunciosController.js';

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

//Endpoints Cidades

app.get('/api/cidades', ListaCidades);

app.post('/api/cidades', CadastrarCidade);

app.delete('/api/cidades/:id', DeleteCidade);

//Endpoints Bairros

app.get('/api/bairros', ListaBairros);

app.post('/api/bairros', CadastrarBairro);

app.delete('/api/bairros/:id', DeleteBairro);

//Endpoints Casas

app.get('/api/casas', ListaCasasController);

app.post('/api/casas', CadastrarCasasController);

app.delete('/api/casas/:id', DeleteCasasController);

//Endpoints Ruas

app.get('/api/ruas', ListaRuasController);

app.post('/api/ruas', CadastrarRuasController);

app.delete('/api/ruas/:id', DeleteRuasController);

//Endpoints Anuncios

app.get('/api/anuncios', ListaAnunciosController);
