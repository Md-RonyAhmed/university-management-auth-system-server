import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemester } = req.body;
  const data = await AcademicSemesterService.createSemester(academicSemester);
  res.status(httpStatus.OK).send({
    success: true,
    message: 'Academic semester is created successfully!',
    data,
  });
});

export const AcademicSemesterController = { createSemester };
