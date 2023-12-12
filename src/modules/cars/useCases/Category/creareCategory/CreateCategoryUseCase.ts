import {inject, injectable} from "tsyringe"
import { ICategoriesRepository, IRequest } from '../../../repositories/Interfaces/ICategoriesRepository';


/**
 * [x] - Definir o tipo de retorn
 * [x] - Alterrar o retorno de erro
 * [x] - Acessar o repositorio
 */

@injectable()
class CreateCategoryUseCase {
  
  constructor( 
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository ){};

  async execute({name, description}: IRequest): Promise<void>{
    const categoryExists = await this.categoriesRepository.findByName(name);

    if(categoryExists){
      throw new Error("Category already exists");
    } 
    
    this.categoriesRepository.create({name, description});
  };
};

export { CreateCategoryUseCase } 