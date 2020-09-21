import { Router } from 'express';
const router = Router();

// import { createTask, getTasks, getTasksByProject, getTask, editTask, deleteTask } from '../controllers/task.controller';
import { getProducts, getProductsByBusiness } from '../controllers/product.controller';

// /api/products/
// router.post('/', createTask);
router.get('/', getProducts);

// /api/task/:taskId
// router.get('/:id', getTask);
// router.delete('/:id', deleteTask);
// router.put('/:id', editTask);

// /api/products/business/:businessId
router.get('/business/:business_id', getProductsByBusiness);

export default router;