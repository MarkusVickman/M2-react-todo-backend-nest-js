import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

//Ett schema för en MySql tabell. Inte så mycket att säga mer än att den skapas enligt dessa specs i MySql-databasen.
//TYPEORM ger säkerhet mot SQL-injektioner.
@Entity()
export class Api {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column({ length: 200 })
  description: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ default: "ej påbörjad" })
  isCompleted: string;

}

//VARFÖR triggar inte