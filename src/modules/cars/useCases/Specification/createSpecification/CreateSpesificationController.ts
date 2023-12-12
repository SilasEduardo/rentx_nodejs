import { Response, Request } from 'express'
import { container } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

;

class CreateSpesificationController {
  

  async hendle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    const specificationServices = container.resolve(CreateSpecificationUseCase)
    await specificationServices.execute({ name, description })


    return response.status(201).send();
  }

}


export { CreateSpesificationController }