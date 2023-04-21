import { OpenDatabase } from '../../database.js';
import { request, response } from 'express';

export const CadastrarCidade = async (request, response) => {
  //os dados vem do body da aplicação
  const { nome, uf } = request.body;
  const db = await OpenDatabase();
  const sql = `INSERT INTO cidades (nome, uf) VALUES (?, ?)`;
  const params = [nome, uf];
  try {
    await db.run(sql, params);
    db.close();
    return response
      .status(201)
      .send({ message: 'Cidade cadastrada com sucesso.' });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao cadastrar cidade' });
  }
};
