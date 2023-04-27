import { OpenDatabase } from '../database.js';

export const ListaCasasService = async () => {
  const db = await OpenDatabase();
  const casas = await db.all(`
    SELECT * FROM casas
  `);
  db.close();
  return casas;
};
