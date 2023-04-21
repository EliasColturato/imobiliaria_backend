import { OpenDatabase } from '../../database.js';

export const CadastrarRuasController = async (request, response) => {
  const { nome, bairro_id } = request.body;
  const db = await OpenDatabase();
  const sql = `INSERT INTO rua (nome, bairro_id) VALUES (?, ?)`;
  const params = [nome, bairro_id];
  try {
    await db.run(sql, params);
    return response.status(201).send({ message: 'Rua cadastrada com sucesso' });
  } catch (error) {
    console.log(error);
    return response.status(400).send({ message: 'Erro ao cadastrar nova rua' });
  }
};
