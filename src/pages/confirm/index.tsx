import { Button, Body, Logo } from "@components";
import { Link } from "react-router-dom";
import texts from "@assets/json/confirm.json";
import { useAppSelector } from "@stores/store";
import styled from "styled-components";

const Typo = styled.p`
  font-size: 16px;
  margin: 20px;
`;

const Title = styled(Typo)`
  font-size: 24px;
  font-weight: bold;
`;

const Typos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function Confirm() {
  const lang = useAppSelector((state) => state.lang.selected);
  const bookInfo = useAppSelector((state) => state.book);

  return (
    <Body>
      <Logo />
      <Typos>
        <Title>{texts[lang].confirm}</Title>
        <Typo>
          {texts[lang].stylist}:{bookInfo.stylistinfo.name[lang]}
        </Typo>
        <Typo>
          {texts[lang].date}:{bookInfo.date.toString()}
        </Typo>
        <Typo>
          {texts[lang].time}:{bookInfo.date.toString()}
        </Typo>
        <Typo>
          {texts[lang].service}:{bookInfo.service.name[lang]}
        </Typo>
        <Title>
          {texts[lang].price}:{bookInfo.service.price}
        </Title>
      </Typos>
      <Link to="charge">
        <Button margin="20px">{texts[lang].submit}</Button>
      </Link>
    </Body>
  );
}

export { Confirm };
