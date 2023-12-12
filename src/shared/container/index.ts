import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/Interfaces/ICategoriesRepository'; 
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { ISpecificateRepository } from '../../modules/cars/repositories/Interfaces/ISpecificationRepositories';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';



container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificateRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)