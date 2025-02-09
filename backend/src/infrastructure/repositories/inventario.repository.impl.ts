import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientosInventarioRepositoryPort } from 'src/core/ports/inventario.repository';
import { MovimientoInventario } from 'src/core/entities/movimiento-inventario.entity';
import { MovimientoInventarioMapper } from '../database/mappers/movimiento-inventario.mapper';
import { MovimientoInventarioOrmEntity } from '../database/entities/movimiento-inventario.orm-entity';
import { ProductoOrmEntity } from '../database/entities/producto.orm-entity';
import { Producto } from 'src/core/entities/producto.entity';

@Injectable()
export class MovimientoInventarioRepository implements MovimientosInventarioRepositoryPort {
  constructor(
    @InjectRepository(MovimientoInventarioOrmEntity)
    private readonly movimientoRepo: Repository<MovimientoInventarioOrmEntity>,
    
    @InjectRepository(ProductoOrmEntity)
    private readonly productoRepo: Repository<ProductoOrmEntity>,
  ) {}

  obtenerMovimientosPorProducto(productoId: string): Promise<MovimientoInventario[]> {
    throw new Error('Method not implemented.');
  }

  async registrarMovimiento(movimiento: MovimientoInventario): Promise<void> {

    const productoOrm = await this.productoRepo.findOne({ where: { sku: movimiento.producto.sku } });

    if (!productoOrm) {
        throw new Error('Producto no encontrado');
    }


    const producto = new Producto(
        productoOrm.nombre,
        productoOrm.sku,
        productoOrm.precio,
        productoOrm.stock,
    );


    if (movimiento.tipo === 'salida' && !producto.tieneStockSuficiente(movimiento.cantidad)) {
        throw new Error('Stock insuficiente para realizar la salida');
    }


    producto.actualizarStock(movimiento.tipo === 'entrada' ? movimiento.cantidad : -movimiento.cantidad);
    









    const movimientoOrm = MovimientoInventarioMapper.toOrmEntity(movimiento);


    console.log(`Registrando movimiento de ${movimiento.tipo} de ${movimiento.cantidad} unidades de ${producto.nombre}`);
    await this.movimientoRepo.save(movimientoOrm);


    if (producto.esStockCritico()) {
        console.log(`Alerta: El stock de ${producto.nombre} es crítico (5 o menos)`);
    }
}  
}
