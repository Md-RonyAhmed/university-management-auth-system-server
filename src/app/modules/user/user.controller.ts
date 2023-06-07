import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res) => {
  const { user } = req.body;
  const data = await UserService.createUser(user);
  try {
    res.status(200).send({
      success: true,
      message: 'user created successfully!',
      data,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Failed to creating user!',
    });
  }
};

export const UserController = { createUser };
