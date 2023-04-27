import { ListaCasasService } from '../../services/ListaCasasService.js';

export const ListaCasasController = async (request, response) => {
  const casas = await ListaCasasService();
  return response.send(casas);
};
