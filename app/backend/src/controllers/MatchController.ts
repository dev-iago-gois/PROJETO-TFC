import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) {
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.matchService.getAll();

    return res.status(200).json(serviceResponse.data);
  }

  public async inProgress(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (!inProgress) return res.status(400).json({ message: 'Missing inProgress query parameter' });
    // casting
    const serviceResponse = await this.matchService.inProgress(JSON.parse(inProgress as string));

    return res.status(200).json(serviceResponse.data);
  }

  public async finish(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const serviceResponse = await this.matchService.finish(Number(id));

    return res.status(200).json(serviceResponse.data);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const serviceResponse = await this.matchService.update(id, { homeTeamGoals, awayTeamGoals });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  // public async getById(req: Request, res: Response): Promise<Response> {
  //   const { id } = req.params;

  //   const serviceResponse = await this.teamService.getById(Number(id));

  //   if (serviceResponse.status !== 'SUCCESSFUL') {
  //     return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  //   }

  //   return res.status(200).json(serviceResponse.data);
  // }
}
