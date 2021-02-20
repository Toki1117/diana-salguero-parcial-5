import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { dataDto } from './entity/data.tdo'
import { ProductoService } from './producto.service'

@Controller('producto')
export class ProductoController {
  constructor(private service: ProductoService) {}

  @Post('insertar')
  async insertData(@Body() data: dataDto) {
    return this.service.insertData(data)
  }

  @Get('/:id')
  async getProducto(@Param('id') id: string) {
    return this.service.getData(id)
  }
}
