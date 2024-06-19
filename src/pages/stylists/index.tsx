import { Body, Logo } from "@components";
import { StylistBox } from "./stylistBox";
import { StylistInfo } from "@entities/StylistInfo";
import styled from "styled-components";

const Boxes = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  width: 700px;
  max-height: 500px;
  margin-top: 200px;

  position: relative;
  overflow-y: auto;

  align-items: flex-start;
  justify-content: center;
`;

function Stylist() {
  const dummies: StylistInfo[] = Array.from({ length: 6 }, () => new StylistInfo({ kor: "이순신", eng: "Sun Sin Yi" }));

  return (
    <Body>
      <Logo />
      <Body>
        <Boxes>
          {dummies.map((e, i) => (
            <StylistBox info={e} key={i} />
          ))}
        </Boxes>
      </Body>
    </Body>
  );
}

export { Stylist };
