import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) {
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.loginService.login(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async getRole(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const actualToken = token.split(' ');
    const serviceResponse = await this.loginService.getRole(actualToken[1]);

    return res.status(200).json(serviceResponse.data);
  }
}
