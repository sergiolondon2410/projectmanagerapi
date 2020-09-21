import { Router } from 'express';
const router = Router();

// import { createProject, getProjects, getProject, editProject, deleteProject } from '../controllers/project.controller';
import { getBusinesses, getBusiness } from '../controllers/business.controller';

// /api/businesses/
// router.post('/', createBusiness);
router.get('/', getBusinesses);

// /api/business/:businessID
router.get('/:id', getBusiness);
// router.delete('/:id', deleteProject);
// router.put('/:id', editProject);

export default router;