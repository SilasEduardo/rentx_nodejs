import { Router } from 'express';
import { categoriesRouters } from './categoriesRouter';
import { specificationRouters } from './specificationRoute';
import { uploadFileRouter } from './uploadFileRouter';

const router = Router();


router.use('/specification', specificationRouters)
router.use('/categories', categoriesRouters)
router.use('/upload', uploadFileRouter)

export { router }