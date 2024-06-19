import styled from "styled-components";
import { Body, Logo } from "@components";
import { StylistBox } from "@pages/stylists/stylistBox";
import { useAppSelector } from "@stores/store";
import { Service } from "@entities/Service";
import { ServiceBox } from "./serviceBox";

const ServiceBody = styled(Body)`
  margin-top: 148px;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  width: 700px;
  max-height: 400px;

  position: relative;
  overflow-y: auto;
  margin: 20px;

  align-items: flex-start;
  justify-content: center;
`;

function ServicePage() {
  const bookInfo = useAppSelector((e) => e.book);

  const dummies: Service[] = Array.from(
    { length: 4 },
    () => new Service({ kor: "더미", eng: "더미" }, 1000, { kor: "더미", eng: "더미" })
  );

  return (
    <Body>
      <Logo />
      <Body>
        <ServiceBody>
          <StylistBox info={bookInfo.stylistinfo} activate={false} />
          <Boxes>
            {dummies.map((e, i) => (
              <ServiceBox info={e} key={i} activate={true} />
            ))}
          </Boxes>
        </ServiceBody>
      </Body>
    </Body>
  );
}

export { ServicePage };
