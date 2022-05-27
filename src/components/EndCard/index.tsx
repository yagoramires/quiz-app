/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { Container } from '../../styles/global';
import { Title, Paragraph, Div, RestartButton } from './styles';

interface StartProps {
  restartTrivia: () => void;
  score: number;
}

export default function EndCard({ restartTrivia, score }: StartProps) {
  return (
    <Container>
      <Title>End Game!</Title>
      <Paragraph>Your final score is: {score}</Paragraph>
      <Div>
        <RestartButton type="button" onClick={restartTrivia}>
          New Quiz
        </RestartButton>
      </Div>
    </Container>
  );
}
