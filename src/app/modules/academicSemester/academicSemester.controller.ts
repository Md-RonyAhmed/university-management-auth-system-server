import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IAcademicSemester } from './academicSemester.interface';

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

export const AcademicSemesterController = { createSemester };
