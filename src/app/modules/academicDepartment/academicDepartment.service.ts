import { SortOrder } from 'mongoose';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { AcademicDepartment } from './academicDepartment.model';
import {
  IAcademicDepartment,
  IAcademicDepartmentFilters,
} from './academicDepartment.interface';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { academicDepartmentSearchableFields } from './academicDepartment.constant';

// create a new department into the database
const createDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment | null> => {
  const data = (await AcademicDepartment.create(payload)).populate(
    'academicFaculty'
  );
  return data;
};

//get all departments from the database
const getAllDepartments = async (
  filters: IAcademicDepartmentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicDepartment[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: academicDepartmentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const data = await AcademicDepartment.find(whereConditions)
    .populate('academicFaculty')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AcademicDepartment.find(whereConditions).countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: data,
  };
};

//get single department from database
const getSingleDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const data = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );
  return data;
};

// update the department information in the database
const updateDepartment = async (
  id: string,
  payload: Partial<IAcademicDepartment>
): Promise<IAcademicDepartment | null> => {
  const data = await AcademicDepartment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('academicFaculty');
  return data;
};

// delete the department from the database
const deleteDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const data = await AcademicDepartment.findByIdAndDelete(id);
  return data;
};

export const AcademicDepartmentService = {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment,
};
