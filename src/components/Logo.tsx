import styled from "styled-components";
import logoPath from "../assets/img/Logo.jpeg";
import { Link } from "react-router-dom";

const IMG = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${logoPath});
  background-size: cover;
`;

const Body = styled(Link)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
`;

function Logo() {
  return (
    <Body to="../">
      <IMG />
    </Body>
  );
}

export { Logo };
