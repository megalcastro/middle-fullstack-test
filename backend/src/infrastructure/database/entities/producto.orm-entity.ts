import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class ProductoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ unique: true })
  sku: string;

  @Column('decimal')
  precio: number;

  @Column('int')
  stock: number;
}
