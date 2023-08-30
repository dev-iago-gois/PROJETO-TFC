export default interface IMatch {
  id?: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}
