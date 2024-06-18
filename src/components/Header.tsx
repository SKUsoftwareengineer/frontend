import styled from "styled-components";
import { Button } from "./Button";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 10%;

  align-items: flex-start;
  justify-content: center;
`;

const HeaderButton = styled(Button)`
  margin-left: 20px;
  width: 130px;
  height: 50px;
`;

function Header() {
  const [isMain, setIsMain] = useState<boolean>(false);
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname === "/") setIsMain(true);
    else setIsMain(false);
  }, [loc.pathname, isMain]);

  return (
    <Body>
      {!isMain && <HeaderButton>{"< 이전"}</HeaderButton>}
      <Outlet />
    </Body>
  );
}

export { Header };
