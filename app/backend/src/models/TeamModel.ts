import SequelizeTeam from '../database/models/SequelizeTeams';
import ITeam from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
// import { NewEntity } from "../Interfaces/ICRUDModel";

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;
  // public async create(data: ITeam): Promise<ITeam> {
  //   const team = await SequelizeTeam.create(data);

  //   return team;
  // }

  async getAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    // console.log(teams);

    return teams;
  }

  async getById(id: ITeam['id']): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);

    if (team == null) return null;
    const { teamName }: ITeam = team;
    return { id, teamName };
  }

  // public async update(id: number, data: ITeam): Promise<ITeam | null> {
  //   const team = await SequelizeTeam.findByPk(id);

  //   if (!team) return null;

  //   await team.update(data);

  //   return team;
  // }

  // public async delete(id: number): Promise<number> {
  //   const team = await SequelizeTeam.findByPk(id);

  //   if (!team) return 0;

  //   await team.destroy();

  //   return 1;
  // }
}
