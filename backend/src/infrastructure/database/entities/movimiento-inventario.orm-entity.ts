import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductoOrmEntity } from './producto.orm-entity';

@Entity('movimientos_inventario')
export class MovimientoInventarioOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProductoOrmEntity, (producto) => producto.movimientos)
  @JoinColumn({ name: 'productoId' })
  producto: ProductoOrmEntity;

  @Column()
  tipo: 'entrada' | 'salida';

  @Column()
  cantidad: number;

  @Column()
  fecha: Date;
}
