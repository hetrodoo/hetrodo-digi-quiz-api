import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import IQuiz from '../models/quiz/IQuiz';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/:quizId')
  public getQuiz(@Param('quizId', ParseIntPipe) id: number): IQuiz[] {
    return this.quizService.getQuiz(id);
  }
}
