import {
  compareTeams,
  getFormattedAwayTeam,
  getFormattedHomeTeam,
} from '../utils/leaderboard.utils';
import TeamModel from '../models/TeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import MatchModel from '../models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class LeaderBoardService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async getHome(): Promise<unknown> {
    const allTeamsDb = await this.teamModel.getAll();
    const allFinishedMatchesDb = await this.matchModel.inProgress(false);
    const homeLeaderboard = allTeamsDb.map((team) => {
      const formattedTeam = getFormattedHomeTeam(
        team.id as number,
        team.teamName,
        allFinishedMatchesDb,
      );
      return formattedTeam;
    });
    const sortedHomeLeaderboard = homeLeaderboard.sort(compareTeams);
    return sortedHomeLeaderboard;
  }

  public async getAway(): Promise<unknown> {
    const allTeamsDb = await this.teamModel.getAll();
    const allFinishedMatchesDb = await this.matchModel.inProgress(false);
    const awayLeaderboard = allTeamsDb.map((team) => {
      const formattedTeam = getFormattedAwayTeam(
        team.id as number,
        team.teamName,
        allFinishedMatchesDb,
      );
      return formattedTeam;
    });
    const sortedAwayLeaderboard = awayLeaderboard.sort(compareTeams);
    return sortedAwayLeaderboard;
  }
}
