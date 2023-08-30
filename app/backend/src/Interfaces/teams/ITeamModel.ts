import { ICRUDModelReader } from '../ICRUDModel';
import ITeam from './ITeam';

interface justplaceholder {
  test?: void;
}

export interface ITeamModel extends ICRUDModelReader<ITeam>, justplaceholder{}
