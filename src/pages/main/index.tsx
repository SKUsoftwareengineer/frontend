import { Button, Body } from "@components";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Body>
      <h1>미용실 키오스크</h1>
      <Link to="lang">
        <Button margin="300px 0 20px 0">언어선택</Button>
      </Link>
      <Button margin="20px">예약하기</Button>
    </Body>
  );
}

export { Main };
