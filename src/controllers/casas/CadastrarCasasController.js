import { OpenDatabase } from '../../database.js';

export const CadastrarCasasController = async (request, response) => {
  //os dados vem do body da aplicação
  const {
    quartos,
    comodos,
    area_construcao,
    garagem,
    cidade_id,
    bairro_id,
    rua_id,
    valor,
    tipo_anuncio,
  } = request.body;
  const db = await OpenDatabase();
  const sql = `INSERT INTO casas (quartos, comodos, area_construcao, garagem, cidade_id,bairro_id, rua_id, valor, tipo_anuncio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    quartos,
    comodos,
    area_construcao,
    garagem,
    cidade_id,
    bairro_id,
    rua_id,
    valor,
    tipo_anuncio,
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
