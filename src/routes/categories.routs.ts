import { Router } from 'express';
import {v4 as uuid} from 'uuid' 
import { Category } from '../model/Category';

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("/", (request, response)=> {
  const {name, description} = request.body


  const category = Object.assign(Category, {
    name,
    description,
    create_at: new Date()
  })


  categories.push({
    category
  })

  return response.status(201).send()

})


export { categoriesRoutes }