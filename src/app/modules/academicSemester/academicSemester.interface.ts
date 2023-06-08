/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model } from 'mongoose';
export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';

export type IAcademicSemesterCodes = '01' | '02' | '03';

export interface IAcademicSemester {
  title: string;
  year: number;
  code: string;
  startMonth: IAcademicSemesterMonths;
  endMonth: IAcademicSemesterMonths;
}

export type AcademicSemesterModel = Model<IAcademicSemester>;
