import styled from "styled-components";

interface ButtonProps {
  margin?: string;
}

const Button = styled.button<ButtonProps>`
  margin: ${(props) => props.margin};
  width: 190px;
  height: 60px;
  border-radius: 8px;

  background-color: #000000;
  color: #ffffff;
  border: 0;

  font-size: 20px;
  cursor: pointer;
`;

export { Button };
