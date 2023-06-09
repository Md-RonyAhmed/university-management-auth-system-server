import { RequestHandler } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';

const createUser: RequestHandler = async (req, res) => {
  const { user } = req.body;
  const data = await UserService.createUser(user);
  res.status(httpStatus.OK).send({
    success: true,
    message: 'User created successfully!',
    data,
  });
};

export const UserController = { createUser };
