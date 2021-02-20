import { EntityRepository, Repository } from 'typeorm'
import { Producto } from './entity/productos'

@EntityRepository(Producto)
export class ProductoRe extends Repository<Producto> {}
