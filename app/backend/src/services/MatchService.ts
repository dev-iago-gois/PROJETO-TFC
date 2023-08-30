// import { NewEntity } from "../Interfaces/ICRUDModel";
import MatchModel from '../models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import IMatch, { IGoals } from '../Interfaces/matches/IMatch';
import TeamModel from '../models/TeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  async getAll(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.getAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  async inProgress(inProgress: string): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.inProgress(inProgress);
    return { status: 'SUCCESSFUL', data: matches };
  }

  async finish(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const finished = await this.matchModel.finish(id);
    return { status: 'SUCCESSFUL', data: { message: finished } };
  }

  async update(id: number, body: IGoals): Promise<ServiceResponse<ServiceMessage>> {
    await this.matchModel.update(id, body);

    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  async create(match: IMatch): Promise<ServiceResponse<IMatch>> {
    // console.log(match);
    const { homeTeamId, awayTeamId } = match;
    if (homeTeamId === awayTeamId) {
      return {
        status: 'UNPROCESSABLE',
        data: { message: 'It is not possible to create a match with two equal teams' },
      };
    }

    const homeTeamCheck = await this.teamModel.getById(homeTeamId);
    const awayTeamCheck = await this.teamModel.getById(awayTeamId);
    if (!homeTeamCheck || !awayTeamCheck) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'There is no team with such id!' },
      };
    }

    const newMatch = await this.matchModel.create(match);

    return { status: 'SUCCESSFUL', data: newMatch };
  }

  // async getById(id: number): Promise<ServiceResponse<ITeam>> {
  //   const team = await this.teamModel.getById(id);

  //   if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

  //   return { status: 'SUCCESSFUL', data: team };
  // }
}
