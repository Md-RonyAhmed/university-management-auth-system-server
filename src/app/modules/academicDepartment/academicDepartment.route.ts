import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router
  .post(
    '/create-department',
    validateRequest(
      AcademicDepartmentValidation.createAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.createDepartment
  )
  .get('/', AcademicDepartmentController.getAllDepartments)
  .get('/:id', AcademicDepartmentController.getSingleDepartment)
  .patch(
    '/:id',
    validateRequest(
      AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.updateDepartment
  )
  .delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = router;
