import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('cats', () => {
    it('should return the cats list', () => {
      const resultCats = {
        list: ['Felicia', 'Tom'],
      };

      expect(catsController.findAll()).toEqual(resultCats);
    });

    it('should return a particular cat', () => {
      const mockedId = '123';
      const resultCat = {
        id: mockedId,
        name: 'Tom',
        breed: 'Miau!',
        age: 4,
      };

      expect(catsController.findById(mockedId)).toEqual(resultCat);
    });

    it('should return created cat', () => {
      const mockedCat: CreateCatDto = {
        age: 1,
        breed: 'vira-lata',
        name: 'Tom',
      };
      expect(catsController.create(mockedCat)).toEqual({
        id: '1',
        ...mockedCat,
      });
    });

    it('should return updated cat', () => {
      const mockedCat: UpdateCatDto = {
        id: '1',
        age: 1,
        breed: 'vira-lata',
        name: 'Tom',
      };
      expect(catsController.update(mockedCat)).toEqual(mockedCat);
    });
  });
});
