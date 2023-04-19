import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import { ListaCidades } from './controllers/ListaCidades.js';
import { CadastrarCidade } from './controllers/CadastrarCidade.js';
import { DeleteCidade } from './controllers/DeleteCidade.js';

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

app.get('/api/cidades', ListaCidades);

app.post('/api/cidades', CadastrarCidade);

app.delete('/api/cidades/:id', DeleteCidade);
