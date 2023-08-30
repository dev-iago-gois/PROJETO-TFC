import SequelizeTeam from '../database/models/SequelizeTeams';
import SequelizeMatch from '../database/models/SequelizeMatches';
import IMatch, { IGoals } from '../Interfaces/matches/IMatch';
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

  async inProgress(inProgress: string): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches;
  }

  async finish(id: number): Promise<string> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }

  async update(id: number, body: IGoals): Promise<void> {
    await this.model.update(body, { where: { id } });
  }

  async create(match: IMatch): Promise<IMatch> {
    const newMatch = await this.model.create(match);

    return newMatch;
  }
}
