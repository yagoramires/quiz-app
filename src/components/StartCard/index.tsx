/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { Container } from '../../styles/global';
import { Title, Paragraph, Div, StartButton } from './styles';

interface StartProps {
  startTrivia: () => void;
}

export default function StartCard({ startTrivia }: StartProps) {
  return (
    <Container>
      <Title>Quiz Game!</Title>
      <Paragraph>Let&apos;s test your knowledge about video games</Paragraph>
      <Div>
        <StartButton type="button" onClick={startTrivia}>
          Start Quiz!
        </StartButton>
      </Div>
    </Container>
  );
}
