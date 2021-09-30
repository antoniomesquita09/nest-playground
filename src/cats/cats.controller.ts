import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(): string {
    return this.catsService.createMiau();
  }

  @Get()
  findAll(): string {
    return this.catsService.getMiau();
  }
}
