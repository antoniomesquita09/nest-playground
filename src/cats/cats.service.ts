import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const { age, name, breed } = cat;
    const newCat: Cat = { id: `${this.cats.length + 1}`, age, name, breed };
    this.cats.push(newCat);
    return newCat;
  }

  // update(cat: CreateCatDto) {
  //   const { age, name, breed } = cat;
  //   const newCat: Cat = { id: `${this.cats.length + 1}`, age, name, breed };
  //   this.cats.push(newCat);
  //   return newCat;
  // }

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id: string): Cat {
    return this.cats.find((cat) => cat.id === id);
  }
}
