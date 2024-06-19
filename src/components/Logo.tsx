import styled from "styled-components";
import logoPath from "../assets/img/Logo.jpeg";

const Logo = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;

  background-image: url(${logoPath});
  background-size: cover;
`;

export { Logo };
