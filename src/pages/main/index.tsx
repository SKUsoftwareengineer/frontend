import { Button, Body } from "@components";
import { Link } from "react-router-dom";
import texts from "@assets/json/main.json";
import { useAppSelector } from "@stores/store";

function Main() {
  const lang = useAppSelector((state) => state.lang.selected);

  return (
    <Body>
      <h1>미용실 키오스크</h1>
      <Link to="lang">
        <Button margin="300px 0 20px 0">{texts[lang].langBtn}</Button>
      </Link>
      <Button margin="20px">{texts[lang].bookBtn}</Button>
    </Body>
  );
}

export { Main };
