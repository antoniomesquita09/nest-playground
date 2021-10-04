import {
  Controller,
  Get,
  Post,
  // Put,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): any {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): any {
    return this.catsService.findById(id);
  }

  @Post()
  @HttpCode(200)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // @Put()
  // update(@Body() updateCatDto: UpdateCatDto) {
  //   return this.catsService.updateCat(updateCatDto);
  // }
}
