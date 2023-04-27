import { OpenDatabase } from '../../database.js';

export const ListaAnunciosController = async (request, response) => {
  const db = await OpenDatabase();
  const anuncios = await db.all(`SELECT * FROM tipos_anuncio`);
  db.close();
  return response.send(anuncios);
};
