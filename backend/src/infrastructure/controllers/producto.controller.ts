import { Controller, Post, Get, Param, Body, BadRequestException, ConflictException } from '@nestjs/common';
import { ProductoRepository } from '../repositories/producto.repository.impl';
import { Producto } from 'src/core/entities/producto.entity';



@Controller('productos')
export class ProductoController {
  constructor(private readonly productoRepository: ProductoRepository) {}

  @Post()
  async create(@Body() productoData: { nombre: string, sku: string, precio: number, stock: number }) {
    const { nombre, sku, precio, stock } = productoData;

    const existingProducto = await this.productoRepository.findBySku(sku);
    if (existingProducto) {
      throw new ConflictException('El producto con este SKU ya existe.');
    }

    const producto = new Producto(nombre, sku, precio, stock);
    await this.productoRepository.save(producto);

    return { message: 'Producto creado exitosamente' };
  }

  @Get()
  async getAll() {
    return this.productoRepository.getAll();
  }

  @Get(':sku')
  async getProducto(@Param('sku') sku: string) {
    const producto = await this.productoRepository.findBySku(sku);

    if (!producto) {
      throw new BadRequestException('Producto no encontrado.');
    }

    return producto;
  }

}

