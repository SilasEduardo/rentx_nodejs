import { Category } from '../../../entities/Category';
import { ICategoriesRepository, IRequest } from '../../../repositories/Interfaces/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
class ListCategoriesUseCase {

    constructor( 
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository 
        ){};

    async execute(): Promise<Category[]> {

        const categories = await this.categoriesRepository.list()
        return categories;
    };

};

export { ListCategoriesUseCase}