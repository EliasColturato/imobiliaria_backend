import { OpenDatabase } from '../../database.js';

export const ListaCasasController = async (request, response) => {
  const db = await OpenDatabase();
  const casas = await db.all(`
    SELECT * FROM casas
  `);
  db.close();
  return response.send(casas);
};
