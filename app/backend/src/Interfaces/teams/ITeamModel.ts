import { ICRUDModelReader } from '../ICRUDModel';
import ITeam from './ITeam';

// TODO REMOVE THIS LATTER
interface justplaceholder {
  test?: void;
}

export interface ITeamModel extends ICRUDModelReader<ITeam>, justplaceholder{}
