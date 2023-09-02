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
};

const getFormattedHomeTeam = (id: number, teamName: string, allMatches: IMatch[]) => {
  const teamMatches = allMatches.filter((match) => match.homeTeamId === id);
  const team = { ...teamSchema };
  team.name = teamName;
  team.totalGames = teamMatches.length;
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
  return team;
};

export {
  teamSchema,
  getFormattedHomeTeam,
};
