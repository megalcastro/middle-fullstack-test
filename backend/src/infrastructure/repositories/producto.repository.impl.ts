import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoRepositoryPort } from 'src/core/ports/producto.repository';
import { Producto } from 'src/core/entities/producto.entity';
import { ProductoMapper } from '../database/mappers/producto.mapper';
import { ProductoOrmEntity } from '../database/entities/producto.orm-entity';

@Injectable()
export class ProductoRepository implements ProductoRepositoryPort {
  constructor(
    @InjectRepository(ProductoOrmEntity)
    private readonly productoRepo: Repository<ProductoOrmEntity>,
  ) {}

  async findBySku(sku: string): Promise<Producto | null> {
    const productoOrm = await this.productoRepo.findOne({ where: { sku } });
    return productoOrm ? ProductoMapper.toDomain(productoOrm) : null;
  }

  async save(producto: Producto): Promise<void> {
    const productoOrm = ProductoMapper.toOrmEntity(producto);
    await this.productoRepo.save(productoOrm);
  }
}
