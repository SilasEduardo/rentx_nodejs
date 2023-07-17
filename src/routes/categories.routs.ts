import { Router, request, response } from 'express';
import { CategoryRepositories } from '../repositories/CategoriesRepositories';
const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepositories()

categoriesRoutes.post("/", (request, response)=> {
  const {name, description} = request.body
  const categoryAlreadyExist = categoriesRepository.findByName(name)
  if(categoryAlreadyExist){
    response.status(400).json({error: "category already exist"})
  }
  categoriesRepository.create({name, description})
  response.status(201).send()
})

categoriesRoutes.get("/", (request, response)=> {
  const all = categoriesRepository.list()
  response.status(200).json(all)
})


export { categoriesRoutes }