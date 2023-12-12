import { Specification } from '../../entities/Specification';

interface ISpecificateDTO {
  name: string, 
  description: string
}

interface IRequest {
  name: string;
  description: string;
}

//=====================CONTRATO DAS CATEGORIAS =======================
interface ISpecificateRepository {
  create({name, description}: ISpecificateDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  
}


export{ ISpecificateRepository, ISpecificateDTO, IRequest }