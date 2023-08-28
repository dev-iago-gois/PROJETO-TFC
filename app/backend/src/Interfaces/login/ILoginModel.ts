import { IUser } from '../users/IUser';

export interface ILoginModel {
  findByEmail(email: IUser['email']): Promise<IUser | null>,
}
