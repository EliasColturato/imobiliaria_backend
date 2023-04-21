import { OpenDatabase } from '../../database.js';

export const CadastrarBairro = async (request, response) => {
  //os dados vem do body da aplicação
  const { nome, cidade_id } = request.body;
  const db = await OpenDatabase();
  const sql = `INSERT INTO bairro (nome, cidade_id) VALUES (?, ?)`;
  const params = [nome, cidade_id];
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
