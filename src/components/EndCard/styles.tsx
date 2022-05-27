import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: #c3073f;

  text-align: center;

  margin-top: 3rem;
`;
export const Paragraph = styled.p`
  margin: 1rem 0 3rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: #373738;

  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RestartButton = styled.button`
  cursor: pointer;
  width: 50%;
  background: #fff;
  border: 3px solid #c3073f;
  color: #c3073f;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: #c3073f;
    color: #fff;
  }
`;
