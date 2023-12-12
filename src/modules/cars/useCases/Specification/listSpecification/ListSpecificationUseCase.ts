import { Specification } from '../../../entities/Specification';
import { ISpecificateRepository } from '../../../repositories/Interfaces/ISpecificationRepositories';
import { inject, injectable } from 'tsyringe';
@injectable()
class ListSpecificateUseCase {

    constructor( 
        @inject("SpecificationsRepository")
        private specificateRepository: ISpecificateRepository 
        ){};

   async execute(): Promise<Specification[]>{

        const categories = await this.specificateRepository.list()
        return categories;
    };

};

export { ListSpecificateUseCase}