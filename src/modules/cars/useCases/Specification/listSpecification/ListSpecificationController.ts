import { Request, Response } from 'express'
import { ListSpecificateUseCase } from './ListSpecificationUseCase' 
import { container } from 'tsyringe'


class ListSpecificationController {

  async handle(request: Request, response: Response){
    const listSpecificateUseCase = container.resolve(ListSpecificateUseCase)
    const all = await listSpecificateUseCase.execute()
    response.status(201).json(all)
  }

}

export {ListSpecificationController}