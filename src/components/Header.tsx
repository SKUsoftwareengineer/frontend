import styled from "styled-components";
import { Button } from "./Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "@stores/store";
import texts from "@assets/json/header.json";

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
  const lang = useAppSelector((state) => state.lang.selected);
  const loc = useLocation();
  const nav = useNavigate();
  const onClick = () => nav(-1);

  useEffect(() => {
    if (loc.pathname === "/") setIsMain(true);
    else setIsMain(false);
  }, [loc.pathname, isMain]);

  return (
    <Body>
      {!isMain && <HeaderButton onClick={onClick}>{texts[lang].backBtn}</HeaderButton>}
      <Outlet />
    </Body>
  );
}

export { Header };
