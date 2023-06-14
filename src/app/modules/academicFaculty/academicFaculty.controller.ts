import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyService } from './academicFaculty.service';
import pick from '../../../shared/pick';
import { academicFacultyFilterableFields } from './academicFaculty.constant';
import { paginationFields } from '../../../constants/pagination';

// create a new faculty
const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const data = await AcademicFacultyService.createFaculty(academicFacultyData);
  sendApiResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty created successfully',
    data,
  });
});

// get all faculties
const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  );

  sendApiResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculties retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

// get a single faculty
const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicFacultyService.getSingleFaculty(id);

  sendApiResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty fetched successfully',
    data,
  });
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  // updateFaculty,
  // deleteFaculty,
};
