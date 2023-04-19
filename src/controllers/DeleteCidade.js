import { open } from 'sqlite';
import { OpenDatabase } from '../database.js';
import { request, response } from 'express';

export const DeleteCidade = async (request, response) => {
  const { id } = request.params;
  const db = await OpenDatabase();
  const sql = 'DELETE FROM cidades WHERE id = ?';
  const params = [id];
  try {
    await db.run(sql, params);
    await db.close();
    return response.status(201).send({
      message: 'Cidade removida com sucesso',
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao remover cidade' });
  }
};
