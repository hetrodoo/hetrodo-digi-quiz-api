import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

describe('QuizController', () => {
  let controller: QuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [QuizService],
    }).compile();

    controller = module.get<QuizController>(QuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array', () => {
    expect(controller.getQuiz(0)).toBeInstanceOf(Array);
  });

  it('should return an array greater then zero', () => {
    expect(controller.getQuiz(0).length).toBeGreaterThan(0);
  });
});
