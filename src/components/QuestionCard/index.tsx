// import { AnswerObject } from '../../App';
import { Container } from '../../styles/global';
import {
  Div,
  AnswerButton,
  Question,
  QuestionNumber,
  QuestionDiv,
} from './styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface CardProps {
  question: string[];
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
  score: number;
}

export default function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  score,
}: CardProps) {
  return (
    <Container>
      <QuestionDiv>
        <QuestionNumber>
          Question:{' '}
          <span>
            {questionNr} / {totalQuestions}
          </span>
        </QuestionNumber>
        <QuestionNumber>Score: {score}</QuestionNumber>
      </QuestionDiv>
      <Question> {question} </Question>
      {answers.map((answer) => (
        <Div key={answer}>
          <AnswerButton
            type="button"
            disabled={!!userAnswer}
            onClick={callback}
            value={answer}
          >
            {answer}
          </AnswerButton>
        </Div>
      ))}
    </Container>
  );
}
