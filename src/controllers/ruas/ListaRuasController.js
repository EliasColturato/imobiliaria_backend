import { OpenDatabase } from '../../database.js';

export const ListaRuasController = async (request, response) => {
  const db = await OpenDatabase();
  const ruas = await db.all(`SELECT * FROM rua`);
  db.close();
  return response.send(ruas);
};
