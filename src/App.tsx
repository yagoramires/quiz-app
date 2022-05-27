import { useState } from 'react';

import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import EndCard from './components/EndCard';
import QuestionCard from './components/QuestionCard';
import StartCard from './components/StartCard';
import GlobalStyle from './styles/global';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<object[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameStart, setGameStart] = useState(false);

  const startTrivia = async () => {
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setGameStart(true);
    setGameOver(false);
  };

  const restartTrivia = () => {
    setGameStart(false);
    setGameOver(true);
  };

  const nextQuestion = () => {
    // Ir para proxima pergunta se nao for a ultima
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Resposta do usuário
      const answer = e.currentTarget.value;
      // Checar se a resposta está correta
      const correct = questions[number].correct_answer === answer;
      // Se estiver correta adicionar ao score
      if (correct) setScore((prev) => prev + 1);
      // Salvar Resposta no array user answers

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);

      nextQuestion();
    }
  };

  return (
    <>
      {!gameStart ? <StartCard startTrivia={startTrivia} /> : null}
      {gameStart && !gameOver ? (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          score={score}
        />
      ) : null}

      {gameOver && gameStart ? (
        <EndCard restartTrivia={restartTrivia} score={score} />
      ) : null}

      <GlobalStyle />
    </>
  );
}

export default App;
