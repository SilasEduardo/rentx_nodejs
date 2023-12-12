
import { ISpecificateRepository, IRequest } from '../../../repositories/Interfaces/ISpecificationRepositories'
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateSpecificationUseCase {
  
  constructor(

    @inject("SpecificationsRepository")
     private spacificationRepository: ISpecificateRepository
     ){};
  
    async execute({name, description}: IRequest): Promise<void>{
    const especificationExists = await this.spacificationRepository.findByName(name);

    if(especificationExists){
      throw new Error("Category already exists");
    }

      this.spacificationRepository.create({
        name, 
        description,
      });

    }
    

}


export { CreateSpecificationUseCase }