import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

//create a new semester
const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const data = await AcademicSemesterService.createSemester(academicSemester);
    sendApiResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created successfully!',
      data,
    });
    next();
  }
);

//get all semesters
const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, academicSemesterFilterableFields);

    const data = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );
    sendApiResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data is retrieved successfully!',
      meta: data.meta,
      data: data.data,
    });
    next();
  }
);

export const AcademicSemesterController = { createSemester, getAllSemesters };
