import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovimientoInventarioOrmEntity } from './movimiento-inventario.orm-entity';

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

  @OneToMany(() => MovimientoInventarioOrmEntity, (movimiento) => movimiento.producto)
  movimientos: MovimientoInventarioOrmEntity[];
}
