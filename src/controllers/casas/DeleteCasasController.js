import { OpenDatabase } from '../../database.js';

export const DeleteCasasController = async (request, response) => {
  const { id } = request.params;
  const db = await OpenDatabase();
  const sql = `DELETE FROM casas WHERE id = ?`;
  const params = [id];
  try {
    await db.run(sql, params);
    await db.close();
    return response.status(201).send({
      message: 'Casa removida com sucesso',
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao remover casa' });
  }
};
