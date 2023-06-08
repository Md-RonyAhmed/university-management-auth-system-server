import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const data = await AcademicSemester.create(payload);
  return data;
};

export const AcademicSemesterService = {
  createSemester,
};
