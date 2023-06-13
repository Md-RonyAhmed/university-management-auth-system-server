import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = Router();

router
  .post(
    '/create-semester',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemesterController.createSemester
  )
  .get('/', AcademicSemesterController.getAllSemesters)
  .get('/:id', AcademicSemesterController.getSingleSemester);

export const AcademicSemesterRoutes = router;
