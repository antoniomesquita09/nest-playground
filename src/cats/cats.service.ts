import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getMiau(): string {
    return 'Miau!';
  }
  createMiau(): string {
    return 'Miau created!';
  }
}
