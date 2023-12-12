import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { container } from 'tsyringe';


class CreateCategoryController {
  
  async hendle(request: Request, response: Response): Promise<Response>{
    const {name, description} = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
  
    //==========================Serviço=================================
    await createCategoryUseCase.execute({name, description})

    return response.status(201).send();

  }

}


export{ CreateCategoryController }