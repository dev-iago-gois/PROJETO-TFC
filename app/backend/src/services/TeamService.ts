// import { NewEntity } from "../Interfaces/ICRUDModel";
import TeamModel from '../models/TeamModel';
import ITeam from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamMode: ITeamModel = new TeamModel(),
  ) {}

  async findAll(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamMode.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }
}
