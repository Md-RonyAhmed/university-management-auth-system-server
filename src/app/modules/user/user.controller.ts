import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IUser } from './user.interface';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.body;
  const data = await UserService.createUser(user);
  sendApiResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully!',
    data,
  });
  next();
};

export const UserController = { createUser };
