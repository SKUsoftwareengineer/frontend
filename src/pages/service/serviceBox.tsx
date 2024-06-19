import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@stores/store";
import { useNavigate } from "react-router-dom";
import { bookSlice } from "@stores/bookSlice";
import { Service } from "@entities/Service";
import texts from "@assets/json/service.json";

interface ImageProps {
  src: string;
}

interface BodyProps {
  activate?: boolean;
}

const Body = styled.div<BodyProps>`
  width: 240px;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 2px #000000 solid;
  border-radius: 10px;
  margin: 10px;

  cursor: ${(props) => (props.activate ? "pointer" : "default")};
`;

const Image = styled.div<ImageProps>`
  width: 110px;
  height: 110px;
  background-size: cover;
  background-image: url(${(props) => props.src});
  margin: 10px;
`;

const Typo = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const Title = styled(Typo)`
  font-size: 24px;
  font-weight: bold;
  margin: 4px 0;
`;

const Typos = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  justify-content: flex-start;
`;

function ServiceBox({ info, activate }: { info: Service; activate?: boolean }) {
  const lang = useAppSelector((state) => state.lang.selected);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const onClcik = () => {
    dispatch(bookSlice.actions.setService(info));
    nav("../confirm");
  };

  return (
    <Body activate={activate} onClick={activate ? onClcik : undefined}>
      <Image src={info.image} />
      <Typos>
        <Title>{info.name[lang]}</Title>
        <Typo>{`${info.price} ${texts[lang].money}`}</Typo>
        <Typo>{info.description[lang]}</Typo>
      </Typos>
    </Body>
  );
}

export { ServiceBox };
