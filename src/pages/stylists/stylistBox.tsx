import styled from "styled-components";
import { StylistInfo } from "@entities/StylistInfo";
import { useAppDispatch, useAppSelector } from "@stores/store";
import { useNavigate } from "react-router-dom";
import { bookSlice } from "@stores/bookSlice";

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

const Typo = styled.div`
  width: 110px;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
`;

function StylistBox({ info, activate }: { info: StylistInfo; activate?: boolean }) {
  const lang = useAppSelector((state) => state.lang.selected);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const onClcik = () => {
    dispatch(bookSlice.actions.setStylist(info));
    nav("../date");
  };

  return (
    <Body activate={activate} onClick={activate ? onClcik : undefined}>
      <Image src={info.image} />
      <Typo>{info.name[lang]}</Typo>
    </Body>
  );
}

export { StylistBox };
