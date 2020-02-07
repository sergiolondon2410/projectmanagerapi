import { Router } from 'express';
const router = Router();

import { createTask, getTasks, getTasksByProject, getTask, editTask, deleteTask } from '../controllers/task.controller';

// /api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

// /api/task/:taskId
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.put('/:id', editTask);

// /api/task/project/:projectId
router.get('/project/:projectid', getTasksByProject);

export default router;