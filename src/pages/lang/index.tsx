import { Button, Body, Logo } from "@components";
import { langSlice } from "@stores/langSlice";
import { useAppDispatch } from "@stores/store";
import { useNavigate } from "react-router-dom";

function Lang() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const onKorClick = () => {
    dispatch(langSlice.actions.setLang("kor"));
    nav(-1);
  };

  const onEngClick = () => {
    dispatch(langSlice.actions.setLang("eng"));
    nav(-1);
  };

  return (
    <Body>
      <Logo />
      <Button margin="300px 0 20px 0" onClick={onKorClick}>
        한국어
      </Button>
      <Button margin="20px" onClick={onEngClick}>
        ENG
      </Button>
    </Body>
  );
}

export { Lang };
