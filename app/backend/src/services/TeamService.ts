import TeamModel from '../models/TeamModel';
import ITeam from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  async getAll(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.getAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  async getById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.getById(id);

    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

    return { status: 'SUCCESSFUL', data: team };
  }
}
