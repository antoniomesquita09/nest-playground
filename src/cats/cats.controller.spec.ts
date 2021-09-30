import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "Miau!"', () => {
      expect(catsController.findAll()).toBe('Miau!');
    });

    it('should return "Miau created!"', () => {
      expect(catsController.create()).toBe('Miau created!');
    });
  });
});
