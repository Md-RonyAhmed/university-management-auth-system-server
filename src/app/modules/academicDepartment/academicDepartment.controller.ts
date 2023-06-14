import { Request, Response } from 'express';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendApiResponse from '../../../shared/sendApiResponse';
import { IAcademicDepartment } from './academicDepartment.interface';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';

// create a new department
const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body;
  const data = await AcademicDepartmentService.createDepartment(
    academicDepartmentData
  );

  sendApiResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department created successfully',
    data,
  });
});

//get all departments
const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const data = await AcademicDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  );

  sendApiResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic departments fetched successfully',
    meta: data.meta,
    data: data.data,
  });
});

//get single department
const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicDepartmentService.getSingleDepartment(id);

  sendApiResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department fetched successfully',
    data,
  });
});

// update the department information
const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicDepartmentService.updateDepartment(id, req.body);

  sendApiResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department updated successfully',
    data,
  });
});

// delete the department
const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await AcademicDepartmentService.deleteDepartment(id);

  sendApiResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department deleted successfully',
    data,
  });
});

export const AcademicDepartmentController = {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment,
};
