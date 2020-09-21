import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
// import projectRoutes from './routes/projects';
// import taskRoutes from './routes/tasks';
import businessRoutes from './routes/businesses';
import productRoutes from './routes/products';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/products', productRoutes);

export default app;