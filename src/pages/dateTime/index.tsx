import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import texts from "@assets/json/date.json";
import { Body, Button, Logo } from "@components";
import { StylistBox } from "@pages/stylists/stylistBox";
import { useAppSelector } from "@stores/store";
import { TimeButton } from "./TimeBtn";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Contents = styled.div`
  display: flex;
  flex-direction: row;

  width: 525px;
  margin: 10px;

  position: relative;
  overflow-y: auto;

  align-items: flex-start;
  justify-content: center;
`;

const Buttons = styled.div`
  width: 180px;
  margin: 10px;
  height: 300px;
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
  const lang = useAppSelector((e) => e.lang.selected);
  const nav = useNavigate();
  const [time, setTime] = useState<number>(20);
  const [date, setDate] = useState<Value>(new Date());

  const arr = Array.from({ length: 12 }, (_, i) => ({
    time: `${i + 9}:00`,
    activated: i % 3 !== 0,
  }));

  const onClick = (i: number) => () => {
    setTime(i);
  };

  const onSubmitClick = () => {
    nav("../service");
  };

  return (
    <Body>
      <Logo />
      <Body>
        <DateTimeBody>
          <StylistBox info={bookInfo.stylistinfo} activate={false} />
          <Contents>
            <Calendar
              onChange={setDate}
              value={date}
              calendarType="gregory"
              view="month"
              prev2Label={null}
              next2Label={null}
              showNeighboringMonth={false}
            />
            <Buttons>
              {arr.map((e, i) => (
                <TimeButton selected={time === i} activated={e.activated} onClick={onClick(i)} key={i}>
                  {e.time}
                </TimeButton>
              ))}
            </Buttons>
          </Contents>
          <Button onClick={onSubmitClick}>{texts[lang].submitBtn}</Button>
        </DateTimeBody>
      </Body>
    </Body>
  );
}

export { DateTime };
