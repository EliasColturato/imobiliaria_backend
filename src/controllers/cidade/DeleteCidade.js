import { open } from 'sqlite';
import { OpenDatabase } from '../../database.js';
import { request, response } from 'express';

export const DeleteCidade = async (request, response) => {
  const { id } = request.params;
  const db = await OpenDatabase();
  const sqlCountBairros =
    'SELECT COUNT(*) as count FROM bairro WHERE cidade_id = ?';
  const sqlDeleteCidade = 'DELETE FROM cidades WHERE id = ?';
  const params = [id];
  try {
    const bairrosCount = await db.get(sqlCountBairros, params);
    if (bairrosCount.count > 0) {
      await db.close();
      return response.status(400).send({
        message:
          'Não é possível excluir a cidade. Existem bairros cadastrados para essa cidade.',
      });
    }
    await db.run(sqlDeleteCidade, params);
    await db.close();
    return response.status(400).send({
      message:
        'Não é possível excluir a cidade. Existem bairros cadastrados para essa cidade.',
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao remover cidade' });
  }
};
