/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import { Container } from '../../styles/global';
import {
  Title,
  Paragraph,
  Div,
  RestartButton,
  ShareDiv,
  PassText,
  FailTest,
} from './styles';

interface StartProps {
  restartTrivia: () => void;
  score: number;
  elapsedTime: string;
  total: number;
}

export default function EndCard({
  restartTrivia,
  score,
  elapsedTime,
  total,
}: StartProps) {
  const validation = () => {
    if (score > 0.5 * total) {
      return true;
    }
    return false;
  };

  const validationMessage = validation()
    ? 'passed on test!'
    : 'I failed the test :(';

  const share = `Let's test your knowledge too! My score was: ${score}. ${validationMessage}`;

  return (
    <Container>
      <Title>End Game!</Title>
      <Paragraph>Your final score is: {score}</Paragraph>
      <Paragraph>Your elapsed time: {elapsedTime}</Paragraph>
      {validation() ? (
        <PassText>You passed the test!</PassText>
      ) : (
        <FailTest>You failed the test</FailTest>
      )}
      <Div>
        <RestartButton type="button" onClick={restartTrivia}>
          New Quiz
        </RestartButton>
      </Div>
      <ShareDiv>
        <FacebookShareButton url="http://localhost:3030" quote={share}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url="http://localhost:3030" title={share}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url="http://localhost:3030"
          title={share}
          separator=" | Try here: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </ShareDiv>
    </Container>
  );
}
