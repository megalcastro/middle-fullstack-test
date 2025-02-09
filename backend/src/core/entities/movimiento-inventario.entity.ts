import { Producto } from '../entities/producto.entity';

export class MovimientoInventario {
  constructor(
    public id: string,
    public producto: Producto,
    public tipo: 'entrada' | 'salida',
    public cantidad: number,
    public fecha: Date,
  ) {}
}
