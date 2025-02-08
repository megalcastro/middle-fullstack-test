import { Producto } from '../entities/producto.entity';

export interface ProductoRepositoryPort {
  findBySku(sku: string): Promise<Producto | null>;
  save(producto: Producto): Promise<void>;
}
