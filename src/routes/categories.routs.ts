import { Router } from 'express';
import { CategoryRepositories } from '../ripositories/CategoriesRepositories';
const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepositories()

categoriesRoutes.post("/", (request, response)=> {
  const {name, description} = request.body
  categoriesRepository.create({name, description})
  response.status(201).send()
})


export { categoriesRoutes }