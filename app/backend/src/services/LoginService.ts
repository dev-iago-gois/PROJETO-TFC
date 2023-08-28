import * as bcrypt from 'bcryptjs';
import LoginModel from '../models/LoginModel';
import { ILogin } from '../Interfaces/users/IUser';
import { ILoginModel } from '../Interfaces/login/ILoginModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import JWT from '../utils/JWT';
import { IToken } from '../Interfaces/IToken';
// TODO FAZER TODA A SERVICE
export default class TeamService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
    private jwtService = JWT,
  ) {}

  public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.loginModel.findByEmail(data.email);
    if (user) {
      if (!bcrypt.compareSync(data.password, user.password)) {
        return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
      }
      const { email } = user as IUser;
      const token = this.jwtService.sign({ email });
      return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  }
}
