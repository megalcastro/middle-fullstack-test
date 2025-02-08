
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProductoController } from '../controllers/producto.controller';
import { ProductoOrmEntity } from '../database/entities/producto.orm-entity';
import { ProductoRepository } from '../repositories/producto.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoOrmEntity])], 
  controllers: [ProductoController], 
  providers: [ProductoRepository], 
  exports: [ProductoModule],
})
export class ProductoModule {}
