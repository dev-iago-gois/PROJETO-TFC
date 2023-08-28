import { IUser } from '../Interfaces/users/IUser';
import SequelizeUser from '../database/models/SequelizeUsers';
import { ILoginModel } from '../Interfaces/login/ILoginModel';

export default class LoginModel implements ILoginModel {
  private model = SequelizeUser;

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });

    if (!user) return null;
    const { id, username, role, password } = user;
    return { id, username, role, email, password };
  }
}
