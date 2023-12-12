import { Router } from 'express';
import { CreateSpesificationController } from '../modules/cars/useCases/Specification/createSpecification/CreateSpesificationController';
import { ListCategoriesController } from '../modules/cars/useCases/Category/listCategories/ListCategoriesController';

const specificationRouters = Router();


//=============== CRIAR CATREGORIAS ==================================
const listSpecificationController = new ListCategoriesController()
const createCategoryController = new CreateSpesificationController()
specificationRouters.post('/', createCategoryController.hendle);

// ==================== LISTAR CATEGORIAS ==============================

specificationRouters.get('/', listSpecificationController.handle);

export {specificationRouters}