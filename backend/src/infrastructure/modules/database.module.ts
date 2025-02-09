import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductoOrmEntity } from '../database/entities/producto.orm-entity';
import { MovimientoInventarioOrmEntity } from '../database/entities/movimiento-inventario.orm-entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [ProductoOrmEntity, MovimientoInventarioOrmEntity], 
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
