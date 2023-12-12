import { Specification } from '../../entities/Specification';
import { ISpecificateDTO, ISpecificateRepository } from '../Interfaces/ISpecificationRepositories';
import { getRepository, Repository } from 'typeorm'


class SpecificationsRepository implements ISpecificateRepository {
  private specificate: Repository<Specification>
  

  constructor() {
    this.specificate = getRepository(Specification)
  }  

 async create({name, description}: ISpecificateDTO): Promise<void> {
      const specificate =  await this.specificate.create({
        name,
        description
      }) 

      this.specificate.save(specificate)
  }

  async findByName(name: string): Promise<Specification> {
    const specificate = await this.specificate.findOne({ name })
    return specificate
  }

  

  async list(): Promise<Specification[]> {
    const specificate = await this.specificate.find()
    return specificate
  }
}

export { SpecificationsRepository }