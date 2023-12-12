import { Category } from '../../entities/Category';

interface ICategoriesDTO {
  name: string, 
  description: string
}

interface IRequest {
  name: string;
  description: string;
}

//=====================CONTRATO DAS CATEGORIAS =======================
interface ICategoriesRepository {
  create({name, description}: ICategoriesDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  
}


export{ ICategoriesRepository, ICategoriesDTO, IRequest }