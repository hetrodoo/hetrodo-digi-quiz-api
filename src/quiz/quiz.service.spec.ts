import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array', () => {
    expect(service.getQuiz()).toBeInstanceOf(Array);
  });

  it('should return an array greater then zero', () => {
    expect(service.getQuiz().length).toBeGreaterThan(0);
  });
});
