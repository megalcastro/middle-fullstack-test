import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioController } from '../controllers/inventario.controller';
import { MovimientoInventarioOrmEntity } from '../database/entities/movimiento-inventario.orm-entity';
import { ProductoOrmEntity } from '../database/entities/producto.orm-entity';

import { ProductoRepository } from '../repositories/producto.repository.impl';
import { MovimientoInventarioRepository } from '../repositories/inventario.repository.impl';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovimientoInventarioOrmEntity, ProductoOrmEntity]),  
  ],
  controllers: [InventarioController],  
  providers: [
    MovimientoInventarioRepository,  
    ProductoRepository,  
  ],
  exports: [InventarioModule],
})
export class InventarioModule {}
