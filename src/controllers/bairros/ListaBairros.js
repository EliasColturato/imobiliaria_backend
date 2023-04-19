import { OpenDatabase } from '../../database.js';

export const ListaBairros = async (request, response) => {
  const db = await OpenDatabase();
  const bairros = await db.all(`
    SELECT * FROM bairro
  `);
  db.close();
  response.send(bairros);
};
