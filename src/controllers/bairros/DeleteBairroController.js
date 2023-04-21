import { OpenDatabase } from '../../database.js';

export const DeleteBairro = async (request, response) => {
  const { id } = request.params;
  const db = await OpenDatabase();
  const sql = 'DELETE FROM bairro WHERE id = ?';
  const params = [id];
  try {
    await db.run(sql, params);
    await db.close();
    return response.status(201).send({
      message: 'Bairro removido com sucesso',
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao remover cidade' });
  }
};
