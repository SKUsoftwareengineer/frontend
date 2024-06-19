import { Button } from "@components/Button";
import styled from "styled-components";

interface TimeButtonProps {
  selected?: boolean;
  activated?: boolean;
}

const TimeButton = styled(Button)<TimeButtonProps>`
  width: 80px;
  height: 40px;

  border-radius: 14px;
  margin: 2px;

  font-size: 18px;

  background-color: ${(props) => (props.activated ? (props.selected ? "#000" : "gray") : "#F5F5F5")};
`;

export { TimeButton };
