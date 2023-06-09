import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';

const createSemester: RequestHandler = catchAsync(async (req, res, next) => {
  const { ...academicSemester } = req.body;
  const data = await AcademicSemesterService.createSemester(academicSemester);
  try {
    res.status(200).send({
      success: true,
      message: 'Academic semester is created successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export const AcademicSemesterController = { createSemester };
