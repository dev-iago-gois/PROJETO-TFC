import IMatch from './IMatch';
// import { ICRUDModelReader } from '../ICRUDModel';

export type ID = number;

// TODO REMOVE THIS LATTER
interface IMatchModelQueryString<T> {
  inProgress(inProgress: string): Promise<T[]>,
}

export interface ICRUDModelReader<T> {
  getAll(): Promise<T[]>,
  getById?(id: ID): Promise<T | null>,
}

export interface IMatchModel extends ICRUDModelReader<IMatch>, IMatchModelQueryString<IMatch>{
}
