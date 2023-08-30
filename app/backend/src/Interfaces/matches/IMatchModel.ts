import IMatch, { IGoals } from './IMatch';

export type ID = number;

interface IMatchModelQueryString<T> {
  inProgress(inProgress: string): Promise<T[]>,
  finish(id: number): Promise<string>,
  update(id: number, body: IGoals): Promise<void>,
  create(match: IMatch): Promise<T>,
}

export interface ICRUDModelReader<T> {
  getAll(): Promise<T[]>,
  getById?(id: ID): Promise<T | null>,
}

export interface IMatchModel extends ICRUDModelReader<IMatch>, IMatchModelQueryString<IMatch>{
}
