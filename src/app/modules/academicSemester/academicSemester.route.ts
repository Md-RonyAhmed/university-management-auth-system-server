import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = Router();

router.post(
  'create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);
