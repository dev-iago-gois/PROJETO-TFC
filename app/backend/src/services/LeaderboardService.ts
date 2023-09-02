// import getOrderTeams from '../utils/getOrderTeams';
// import getTeams from '../utils/getTeamsInfo';
import { getFormattedHomeTeam } from '../utils/leaderboard.utils';
import TeamModel from '../models/TeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import MatchModel from '../models/MatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class LeaderBoardService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  // eslint-disable-next-line max-lines-per-function
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
    const sortedHomeLeaderboard = homeLeaderboard.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      return 0;
    });
    return sortedHomeLeaderboard;
  }
}
