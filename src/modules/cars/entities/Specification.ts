import {v4 as uuidv4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';


@Entity("Specification")


class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4();
    }
  }
}

export { Specification }