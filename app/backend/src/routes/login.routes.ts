import { Request, Response, Router } from 'express';
import LoginController from '../controllers/LoginController';
import Validations from '../middlewares/Validations';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => loginController.login(req, res),
);
router.get(
  '/role',
  Validations.validateToken,
  (req: Request, res: Response) => loginController.getRole(req, res),
);
// // router.post(
// //   '/register',
// //   Validations.validateToken,
// //   Validations.validateUser,
// //   (req, res) => userController.createUser(req, res),
// // );

// // router.get('/', (req, res) => userController.getAllUsers(req, res));

// // router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;
