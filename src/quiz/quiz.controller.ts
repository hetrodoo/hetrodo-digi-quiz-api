import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';
import IQuiz from '../models/quiz/IQuiz';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  public getQuiz(): IQuiz[] {
    return this.quizService.getQuiz();
  }
}
