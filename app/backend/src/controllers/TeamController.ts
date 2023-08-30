import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) {
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.teamService.getAll();

    return res.status(200).json(serviceResponse.data);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const serviceResponse = await this.teamService.getById(Number(id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }
}
