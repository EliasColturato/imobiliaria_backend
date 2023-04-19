import { OpenDatabase } from '../database.js';

export const ListaCidades = async (request, response) => {
  const db = await OpenDatabase();
  const cidades = await db.all(`
    SELECT * FROM cidades
  `);
  db.close();
  response.send(cidades);
};
