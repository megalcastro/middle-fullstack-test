import { Producto } from './producto.entity'; 

describe('Producto', () => {

  it('should correctly update stock for entrada', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 10);
    producto.actualizarStock(5);  
    expect(producto.stock).toBe(15);  
  });

  it('should correctly update stock for salida', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 10);
    producto.actualizarStock(-3);  
    expect(producto.stock).toBe(7);  
  });

  it('should return true if stock is sufficient', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 10);
    expect(producto.tieneStockSuficiente(5)).toBe(true);  
  });

  it('should return false if stock is insufficient', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 10);
    expect(producto.tieneStockSuficiente(15)).toBe(false);  
  });

  it('should return true if stock is critical (5 or less)', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 5);
    expect(producto.esStockCritico()).toBe(true);  
  });

  it('should return false if stock is not critical', () => {
    const producto = new Producto('MANZANA VERDE', '12345', 1.5, 10);
    expect(producto.esStockCritico()).toBe(false);  
  });

});
