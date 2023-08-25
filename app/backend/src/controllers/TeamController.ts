import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) {
  }

  public async findAll(_req: Request, res: Response): Promise<Response> {
    // try {
    //   const teams = await this.teamService.getAll();

    //   return res.status(200).json(teams);
    // } catch (error) {
    //   return res.status(500).json({
    //     error: 'Internal server error',
    //     message: error.message,
    //   });
    // }
    const serviceResponse = await this.teamService.findAll();

    return res.status(200).json(serviceResponse.data);
  }
}
