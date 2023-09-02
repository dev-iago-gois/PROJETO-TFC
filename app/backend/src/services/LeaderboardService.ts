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

  public async getHome(): Promise<unknown> {
    const allTeamsDb = await this.teamModel.getAll();
    // console.log(allTeamsDb.length);
    const allFinishedMatchesDb = await this.matchModel.inProgress(false);
    // console.log(allMatchesDb);

    const homeLeaderboard = allTeamsDb.map((team) => {
      const formattedTeam = getFormattedHomeTeam(
        team.id as number,
        team.teamName,
        allFinishedMatchesDb,
      );
      return formattedTeam;
    });
    return homeLeaderboard;
  }
}
