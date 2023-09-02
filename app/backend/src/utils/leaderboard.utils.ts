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

export {
  teamSchema,
  getFormattedHomeTeam,
};
