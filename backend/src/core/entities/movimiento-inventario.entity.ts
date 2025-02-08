export class MovimientoInventario {
    constructor(
      public readonly id: string,
      public readonly productoId: string,
      public readonly tipo: 'entrada' | 'salida',
      public readonly cantidad: number,
      public readonly fecha: Date,
    ) {}
  }
  