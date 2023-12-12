
import { Category } from '../../entities/Category';
import { 
  ICategoriesDTO, 
  ICategoriesRepository 
} from '../Interfaces/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm'



class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }  

  
 async create({name, description}: ICategoriesDTO): Promise<void> {
    const category =  await this.repository.create({
      name, 
      description
    });

    await this.repository.save(category)
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({name})
    return category
  }

  //(property) SpecificationsRepository.specificate: Specification[]
  
  async list(): Promise<Category[]> {
    const category = await this.repository.find()
    return category
  }78
}

export { CategoriesRepository }