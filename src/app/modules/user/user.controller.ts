import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  const { user } = req.body;
  const data = await UserService.createUser(user);
  try {
    res.status(200).send({
      success: true,
      message: 'User created successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = { createUser };
