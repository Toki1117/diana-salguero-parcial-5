import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Examen extraordinario de Diana Salguero!';
  }


}
