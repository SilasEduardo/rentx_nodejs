
import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from '../../repositories/Interfaces/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategories {
  name: string;
  description: string;
}



@injectable()
class UpdateCategorysUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
    ) { }



  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {

    return new Promise((resolve, reject) => {
      const categories: IImportCategories[] = [];


      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse()


      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {
        const [name, description] = line

        categories.push({
          name,
          description
        })
      })
      .on('end', ()=> {
        fs.promises.unlink(file.path)
        resolve(categories)
      })
      .on('error', (error)=> {
        reject(error)
      });

    });

  }

  async execute(file: Express.Multer.File): Promise<void> {

    const categories = await this.loadCategories(file);

    categories.map(category => {
      const {name, description} = category;
      const existsCategorys = this.categoriesRepository.findByName(name);

      if(!existsCategorys){
        this.categoriesRepository.create({
          name, 
          description
        })
      }
    })

  }

}


export { UpdateCategorysUseCase }