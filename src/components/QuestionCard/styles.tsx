import styled from 'styled-components';

export const QuestionNumber = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: #1f1f1f;

  text-align: left;

  margin-top: 3rem;
  span {
    color: #c3073f;
  }
`;
export const Question = styled.p`
  margin: 1rem 0 2rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1f1f1f;

  text-align: justify;
`;

export const QuestionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerButton = styled.button`
  cursor: pointer;
  width: 50%;
  background: #c3073f;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 2px;

  :hover {
    background-color: #fff;
    color: #c3073f;
  }
`;
