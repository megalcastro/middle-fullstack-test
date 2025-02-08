import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/modules/database.module';
import { ProductoModule } from './infrastructure/modules/producto.module';


@Module({
  imports: [DatabaseModule,ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
