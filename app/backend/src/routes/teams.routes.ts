import { Request, Router, Response } from 'express';
import TeamController from '../controllers/TeamController';
// import Validations from '../middlewares/Validations';

const teamController = new TeamController();

const router = Router();

router.get('/', (req: Request, res: Response) => teamController.findAll(req, res));

// router.get('/:id', (req: Request, res: Response) => bookController.getById(req, res));

// router.post(
//   '/',
//   Validations.validateToken,
//   Validations.validateBook,
//   (req: Request, res: Response) => bookController.createBook(req, res),
// );

// router.put(
//   '/:id',
//   Validations.validateToken,
//   Validations.validateBook,
//   (req: Request, res: Response) =>
//     bookController.updateBook(req, res),
// );

// router.delete(
//   '/:id',
//   Validations.validateToken,
//   (req: Request, res: Response) => bookController.deleteBook(req, res),
// );

export default router;
