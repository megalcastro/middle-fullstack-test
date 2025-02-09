import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MovimientoInventario } from 'src/core/entities/movimiento-inventario.entity';
import { MovimientoInventarioRepository } from '../repositories/inventario.repository.impl';

@Controller('inventario')
export class InventarioController {
  constructor(
    private readonly movimientoInventarioRepository: MovimientoInventarioRepository,
  ) {}

  @Post('movimiento')
  async registrarMovimiento(@Body() movimientoData: MovimientoInventario): Promise<void> {
    try {

      await this.movimientoInventarioRepository.registrarMovimiento(movimientoData);
    } catch (error) {
      if (error.message === 'Stock insuficiente para realizar la salida') {
        throw new BadRequestException('Stock insuficiente para realizar la salida');
      } else if (error.message === 'Producto no encontrado') {
        throw new BadRequestException('Producto no encontrado');
      } else {
        throw error;
      }
    }
  }
}
