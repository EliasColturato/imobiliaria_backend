import { OpenDatabase } from '../../database.js';

export const CadastrarCasasController = async (request, response) => {
  //os dados vem do body da aplicação
  const {
    quartos,
    comodos,
    area_construcao,
    garagem,
    bairro_id,
    rua_id,
    valor,
  } = request.body;
  const db = await OpenDatabase();
  const sql = `INSERT INTO casas (quartos, comodos, area_construcao, garagem, bairro_id, rua_id, valor) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    quartos,
    comodos,
    area_construcao,
    garagem,
    bairro_id,
    rua_id,
    valor,
  ];
  try {
    await db.run(sql, params);
    db.close();
    return response
      .status(201)
      .send({ message: 'Casa cadastrada com sucesso' });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Erro ao cadastrar casa' });
  }
};
