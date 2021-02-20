import { Injectable } from '@nestjs/common'
import { dataDto } from './entity/data.tdo'
import { Producto } from './entity/productos'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductoRe } from './product'

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoRe)
    private producto: ProductoRe,
  ) {}
  async insertData(data: dataDto) {
    const { nombre, precio, existencia } = data

    const producto = new Producto()

    producto.nombre = nombre
    producto.precio = precio
    producto.existencia = existencia

    producto.save()

    return producto
  }

  async getData(id: string) {
    const found = await this.producto.findOne({
      where: { id: id },
    })
    const precio = found.precio
    return precio
  }
}
