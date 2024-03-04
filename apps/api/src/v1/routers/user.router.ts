import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth-middleware';

const userRouter = Router();

userRouter.get('/profile', UserController.getUser);
export default userRouter;
