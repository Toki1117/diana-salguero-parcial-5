import { Injectable } from '@nestjs/common'
import { dataDto } from './entity/data.tdo'
import { Producto } from './entity/productos'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductoRe } from './product'
import { getRepository } from 'typeorm'

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

    return producto.save()
  }

  async getData(id: string) {
    const found = await getRepository(Producto).createQueryBuilder().where('id = :id', { id }).getOne()
    return !found ? null : found; 
    /* const found = await this.producto.findOne({
      where: { id: id },
    })
    try {
      const precio = found.precio
      return precio
    } catch(e) {
      return null;
    } */
  }
}
