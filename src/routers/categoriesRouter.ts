import {  Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/Category/creareCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/Category/listCategories/ListCategoriesController';



const categoriesRouters = Router();
const listCategoriesController = new ListCategoriesController()
const createCategoryController = new CreateCategoryController()

//=============== CRIAR CATREGORIAS ==================================

categoriesRouters.post('/', createCategoryController.hendle)

// ==================== LISTAR CATEGORIAS ==============================

categoriesRouters.get('/', listCategoriesController.handle);

export {categoriesRouters}