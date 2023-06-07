import { Model } from 'mongoose';

/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface IUser {
  id: string;
  role: string;
  password: string;
}

export type UserModel = Model<IUser, object>;
