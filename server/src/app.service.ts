import { Injectable } from '@nestjs/common';

export interface IGetHello {
  id: number
  name: string
}

@Injectable()
export class AppService {
  getHello(): IGetHello {
    return {
      id: 1,
      name: 'Maxik'
    };
  }
}
