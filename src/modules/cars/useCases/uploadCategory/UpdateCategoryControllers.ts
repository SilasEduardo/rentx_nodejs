import { Request, Response } from 'express'
import { UpdateCategorysUseCase } from './UpdateCategorysUseCase'
import { container } from 'tsyringe';



class UpdateCategorysContriller{

  handle(request: Request, response: Response): Response{
    const { file } = request;

    const updateCategoryUseCase = container.resolve(UpdateCategorysUseCase)

    updateCategoryUseCase.execute(file)
    return response.status(201).json()
  }
}


export { UpdateCategorysContriller }