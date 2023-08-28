import * as bcrypt from 'bcryptjs';
import LoginModel from '../models/LoginModel';
import { ILogin, IUser } from '../Interfaces/users/IUser';
import { ILoginModel } from '../Interfaces/login/ILoginModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import JWT from '../utils/JWT';
import { IToken } from '../Interfaces/IToken';
import { IRole } from '../Interfaces/users/IRole';

export default class TeamService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
    private jwtService = JWT,
  ) {}

  public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.loginModel.findByEmail(data.email);
    if (user) {
      if (!bcrypt.compareSync(data.password, user.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }
      const { email } = user as IUser;
      const token = this.jwtService.sign({ email });
      return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }

  public async getRole(token: string): Promise<ServiceResponse<ServiceMessage | IRole>> {
    const validToken = await this.jwtService.verify(token);

    const { email } = validToken as IUser;
    const user = await this.loginModel.findByEmail(email);

    const { role } = user as IUser;
    return { status: 'SUCCESSFUL', data: { role } };
  }
}
