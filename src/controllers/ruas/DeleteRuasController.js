import { OpenDatabase } from '../../database.js';

export const DeleteRuasController = async (request, response) => {
  const db = await OpenDatabase();
  const { id } = request.params;
  const params = [id];
  const sqlDeleteRua = `DELETE INTO rua WHERE id = ?`;
  const CountCasas = 'SELECT COUNT(*) as count FROM casa WHERE rua_id = ?';
  try {
    const casasCount = await db.get(CountCasas, params);
    if (casasCount.count > 0) {
      await db.close();
      return response.status(400).send({
        message:
          'Não é possível excluir a rua. Existem casas cadastradas nessa rua.',
      });
    } else {
      await db.run(sqlDeleteRua, params);
      await db.close();
      return response.status(200).send({
        message: 'Rua removida com sucesso',
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao remover rua' });
  }
};
