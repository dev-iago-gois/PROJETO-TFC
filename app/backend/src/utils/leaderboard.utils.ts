import ILeaderBoard from '../Interfaces/leaderboards/ILeaderboard';
import IMatch from '../Interfaces/matches/IMatch';

const teamSchema = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

const getFormattedHomeTeam = (id: number, teamName: string, allMatches: IMatch[]) => {
  const teamMatches = allMatches.filter((match) => match.homeTeamId === id);
  const team = { ...teamSchema };
  team.name = teamName; team.totalGames = teamMatches.length;
  team.totalVictories = teamMatches
    .filter((match) => match.homeTeamId === id && match.homeTeamGoals > match.awayTeamGoals).length;
  team.totalDraws = teamMatches
    .filter((match) => match.homeTeamId === id && match.homeTeamGoals === match.awayTeamGoals)
    .length;
  team.totalLosses = teamMatches
    .filter((match) => match.homeTeamId === id && match.homeTeamGoals < match.awayTeamGoals).length;
  team.goalsFavor = teamMatches.filter((match) => match.homeTeamId === id)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  team.goalsOwn = teamMatches.filter((match) => match.homeTeamId === id)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  team.totalPoints = (team.totalVictories * 3) + team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = `${((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2)}`;
  return team;
};

const getFormattedAwayTeam = (id: number, teamName: string, allMatches: IMatch[]) => {
  const teamMatches = allMatches.filter((match) => match.awayTeamId === id);
  const team = { ...teamSchema };
  team.name = teamName; team.totalGames = teamMatches.length;
  team.totalVictories = teamMatches
    .filter((match) => match.awayTeamId === id && match.awayTeamGoals > match.homeTeamGoals).length;
  team.totalDraws = teamMatches
    .filter((match) => match.awayTeamId === id && match.awayTeamGoals === match.homeTeamGoals)
    .length;
  team.totalLosses = teamMatches
    .filter((match) => match.awayTeamId === id && match.awayTeamGoals < match.homeTeamGoals).length;
  team.goalsFavor = teamMatches.filter((match) => match.awayTeamId === id)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  team.goalsOwn = teamMatches.filter((match) => match.awayTeamId === id)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  team.totalPoints = (team.totalVictories * 3) + team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = `${((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2)}`;
  return team;
};

const getFormattedTeam = (id: number, teamName: string, allMatches: IMatch[]) => {
  const homeInfo = getFormattedHomeTeam(id, teamName, allMatches);
  const awayInfo = getFormattedAwayTeam(id, teamName, allMatches);
  const team = { ...teamSchema, name: teamName };
  team.totalGames = homeInfo.totalGames + awayInfo.totalGames;
  team.totalVictories = homeInfo.totalVictories + awayInfo.totalVictories;
  team.totalDraws = homeInfo.totalDraws + awayInfo.totalDraws;
  team.totalLosses = homeInfo.totalLosses + awayInfo.totalLosses;
  team.goalsFavor = homeInfo.goalsFavor + awayInfo.goalsFavor;
  team.goalsOwn = homeInfo.goalsOwn + awayInfo.goalsOwn;
  team.totalPoints = homeInfo.totalPoints + awayInfo.totalPoints;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = `${((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2)}`;
  return team;
};

const compareTeams = (a: ILeaderBoard, b: ILeaderBoard): number => {
  if (a.totalPoints > b.totalPoints) return -1;
  if (a.totalPoints < b.totalPoints) return 1;
  if (a.totalVictories > b.totalVictories) return -1;
  if (a.totalVictories < b.totalVictories) return 1;
  if (a.goalsBalance > b.goalsBalance) return -1;
  if (a.goalsBalance < b.goalsBalance) return 1;
  if (a.goalsFavor > b.goalsFavor) return -1;
  if (a.goalsFavor < b.goalsFavor) return 1;
  return 0;
};

export {
  getFormattedHomeTeam,
  getFormattedAwayTeam,
  getFormattedTeam,
  compareTeams,
};
