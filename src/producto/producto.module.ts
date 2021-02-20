import { Module } from '@nestjs/common'
import { ProductoController } from './producto.controller'
import { ProductoService } from './producto.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductoRe } from './product'

@Module({
  imports: [TypeOrmModule.forFeature([ProductoRe])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
