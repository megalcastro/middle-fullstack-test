export class Producto {
    constructor(
      public readonly nombre: string,
      public readonly sku: string,
      public precio: number,
      public stock: number,
    ) {}
  
    actualizarStock(cantidad: number): void {
      this.stock += cantidad;
    }
  
    tieneStockSuficiente(cantidad: number): boolean {
      return this.stock >= cantidad;
    }
  
    esStockCritico(): boolean {
      return this.stock <= 5;
    }
  }
  