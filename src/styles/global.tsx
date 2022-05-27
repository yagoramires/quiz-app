import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

:root {
  --primary-color: #C3073F;
  --primary-dark-color:#1A1A1D;

  --successColor:#0197F6;
  --infoColor:#0197F6;
  --errorColor:#F2AF29;
  --warningColor:#F2AF29;
}

body {
  font-family: sans-serif;
  background: #C3073F;
  color: #1A1A1D;
}
html, body, #root {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
  background: #C3073F;
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 4px;
}
a {
  text-decoration: none;
  color: #C3073F;
}
ul {
  list-style: none;
}
`;

export const Container = styled.div`
  min-width: 90%;
  max-width: 860px;
  min-height: 350px;
  background: #fff;
  margin: 30px auto;
  padding: 100px;
  background-color: #eee;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
