import { useState } from "react";
import styled from "styled-components";
import { Body, Logo } from "@components";
import { StylistBox } from "@pages/stylists/stylistBox";
import { useAppSelector } from "@stores/store";
import { TimeButton } from "./TimeBtn";

const Contents = styled.div`
  display: flex;
  flex-direction: row;

  width: 525px;
  height: 500px;

  position: relative;
  overflow-y: auto;

  align-items: flex-start;
  justify-content: center;
`;

const Buttons = styled.div`
  width: 180px;
  height: 310px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;

  align-items: center;
  justify-content: center;
`;

const DateTimeBody = styled(Body)`
  margin-top: 200px;
`;

function DateTime() {
  const bookInfo = useAppSelector((e) => e.book);
  const [time, setTime] = useState<number>(20);

  const arr = Array.from({ length: 12 }, (_, i) => ({
    time: `${i + 9}:00`,
    activated: i % 3 !== 0,
  }));

  const onClick = (i: number) => () => {
    setTime(i);
  };

  return (
    <Body>
      <Logo />
      <Body>
        <DateTimeBody>
          <StylistBox info={bookInfo.stylistinfo} activate={false} />
          <Contents>
            <Buttons>
              {arr.map((e, i) => (
                <TimeButton selected={time === i} activated={e.activated} onClick={onClick(i)} key={i}>
                  {e.time}
                </TimeButton>
              ))}
            </Buttons>
          </Contents>
        </DateTimeBody>
      </Body>
    </Body>
  );
}

export { DateTime };
