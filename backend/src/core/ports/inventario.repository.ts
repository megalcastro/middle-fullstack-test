import { MovimientoInventario } from '../entities/movimiento-inventario.entity';

export interface MovimientosInventarioRepositoryPort {
  registrarMovimiento(movimiento: MovimientoInventario): Promise<void>;
  obtenerMovimientosPorProducto(productoId: string): Promise<MovimientoInventario[]>;
}
