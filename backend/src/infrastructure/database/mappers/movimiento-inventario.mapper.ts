import { MovimientoInventario } from 'src/core/entities/movimiento-inventario.entity';
import { MovimientoInventarioOrmEntity } from '../entities/movimiento-inventario.orm-entity';
import { Producto } from 'src/core/entities/producto.entity';
import { ProductoOrmEntity } from '../entities/producto.orm-entity';

export class MovimientoInventarioMapper {
  static toOrmEntity(movimiento: MovimientoInventario): MovimientoInventarioOrmEntity {
    const movimientoOrm = new MovimientoInventarioOrmEntity();
    movimientoOrm.id = movimiento.id;

    const productoOrm = new ProductoOrmEntity();
    movimientoOrm.producto = productoOrm;
    movimientoOrm.tipo = movimiento.tipo;
    movimientoOrm.cantidad = movimiento.cantidad;
    movimientoOrm.fecha = movimiento.fecha;

    return movimientoOrm;
  }

  static toDomain(movimientoOrm: MovimientoInventarioOrmEntity): MovimientoInventario {
    const producto = new Producto(
      movimientoOrm.producto.nombre,
      movimientoOrm.producto.sku,
      movimientoOrm.producto.precio,
      movimientoOrm.producto.stock,
    );

    return new MovimientoInventario(
      movimientoOrm.id,
      producto,
      movimientoOrm.tipo,
      movimientoOrm.cantidad,
      movimientoOrm.fecha,
    );
  }
}
