import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.post('/create-user', UserController.createUser);

export const UserRoutes = router;
