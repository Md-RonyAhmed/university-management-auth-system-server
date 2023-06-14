/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model } from 'mongoose';

export interface IUser {
  id: string;
  role: string;
  password: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
