import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {
  }

  public async getHome(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderboardService.getHome();

    return res.status(200).json(serviceResponse);
  }

  public async getAway(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderboardService.getAway();

    return res.status(200).json(serviceResponse);
  }

  public async getLeaderboard(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderboardService.getLeaderboard();

    return res.status(200).json(serviceResponse);
  }
}
