import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'
import { container } from 'tsyringe'
class ListCategoriesController {
  

  async handle(request: Request, response: Response){
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const all = await listCategoriesUseCase.execute()
    response.status(201).json(all)
  }
}

export { ListCategoriesController }