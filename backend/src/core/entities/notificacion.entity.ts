export class Notificacion {
    constructor(
      public readonly id: string,
      public readonly productoId: string,
      public readonly cantidadRestante: number,
      public readonly fechaRegistro: Date,
    ) {}
  }
  