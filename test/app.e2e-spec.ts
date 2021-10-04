import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/cats (GET)', () => {
    const resultCats = {
      list: ['Felicia', 'Tom'],
    };
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(resultCats);
  });

  it('/cats/:id (GET)', () => {
    const mockedId = '321';
    return request(app.getHttpServer())
      .get(`/cats/${mockedId}`)
      .expect(200)
      .expect({
        id: mockedId,
        name: 'Tom',
        breed: 'Miau!',
        age: 4,
      });
  });

  it('/cats (POST)', () => {
    const mockedCat = {
      age: 1,
      breed: 'vira-lata',
      name: 'Tom',
    };
    return request(app.getHttpServer())
      .post('/cats')
      .send(mockedCat)
      .expect(200)
      .expect({
        id: '1',
        ...mockedCat,
      });
  });

  it('/cats (PUT)', () => {
    const mockedCat = {
      id: '1',
      age: 1,
      breed: 'vira-lata',
      name: 'Tom',
    };
    return request(app.getHttpServer())
      .put('/cats')
      .send(mockedCat)
      .expect(200)
      .expect(mockedCat);
  });
});
