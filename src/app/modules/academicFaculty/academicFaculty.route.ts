import { Router } from 'express';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = Router();

router
  .post(
    '/create-faculty',
    validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
    AcademicFacultyController.createFaculty
  )
  .get('/', AcademicFacultyController.getAllFaculties)
  .get('/:id', AcademicFacultyController.getSingleFaculty);
// .patch(
//   '/:id',
//   validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
//   AcademicFacultyController.updateFaculty
// )
// .delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;
