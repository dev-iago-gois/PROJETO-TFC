import SequelizeTeam from '../database/models/SequelizeTeams';
import ITeam from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async getAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();

    return teams;
  }

  async getById(id: ITeam['id']): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);

    if (team == null) return null;
    const { teamName }: ITeam = team;
    return { id, teamName };
  }
}
