export default interface IQuiz {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'hard' | 'easy' | 'medium';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
