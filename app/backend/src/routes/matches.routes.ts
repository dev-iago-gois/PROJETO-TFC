import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';
// import Validations from '../middlewares/Validations';

const matchController = new MatchController();

const router = Router();

router.get(
  '/',
  // Validations.validateLogin,
  (req: Request, res: Response) => matchController.getAll(req, res),
);
// router.get(
//   '/role',
//   // Validations.validateToken,
//   (req: Request, res: Response) => loginController.getRole(req, res),
// );
// // router.post(
// //   '/register',
// //   Validations.validateToken,
// //   Validations.validateUser,
// //   (req, res) => userController.createUser(req, res),
// // );

// // router.get('/', (req, res) => userController.getAllUsers(req, res));

// // router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;