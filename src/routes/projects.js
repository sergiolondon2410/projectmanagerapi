import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProject, editProject, deleteProject } from '../controllers/project.controller';

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);

// /api/project/:projectID
router.get('/:id', getProject);
router.delete('/:id', deleteProject);
router.put('/:id', editProject);

export default router;