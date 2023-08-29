import SequelizeTeam from '../database/models/SequelizeTeams';
import SequelizeMatch from '../database/models/SequelizeMatches';
import IMatch from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
// import { NewEntity } from "../Interfaces/ICRUDModel";

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  async getAll(): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches;
  }
}