import { Producto } from 'src/core/entities/producto.entity';
import { ProductoOrmEntity } from '../entities/producto.orm-entity';



export class ProductoMapper {
  static toDomain(entity: ProductoOrmEntity): Producto {
    return new Producto(entity.nombre, entity.sku, entity.precio, entity.stock);
  }

  static toOrmEntity(domain: Producto): ProductoOrmEntity {
    const ormEntity = new ProductoOrmEntity();
    ormEntity.nombre = domain.nombre;
    ormEntity.sku = domain.sku;
    ormEntity.precio = domain.precio;
    ormEntity.stock = domain.stock;
    return ormEntity;
  }
}
