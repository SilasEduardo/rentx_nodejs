import {v4 as uuidv4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

// Desenha o modelo da Categoria
@Entity("Categories")

class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  create_ad: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4();
    }
  }
}
export { Category }