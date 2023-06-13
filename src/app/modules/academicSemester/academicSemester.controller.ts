import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

//create a new semester
const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemester } = req.body;
  const data = await AcademicSemesterService.createSemester(academicSemester);
  sendApiResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully!',
    data,
  });
});

//get all semesters
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
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
});

//get single semester
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicSemesterService.getSingleSemester(id);

  sendApiResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data is retrieved successfully!',
    data,
  });
});

//update the semester
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const data = await AcademicSemesterService.updateSemester(id, updatedData);

  sendApiResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The semester is updated successfully!',
    data,
  });
});

//delete the semester
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicSemesterService.deleteSemester(id);

  sendApiResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The semester is deleted successfully!',
    data,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
