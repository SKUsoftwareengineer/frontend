import { Route, Routes } from "react-router-dom";
import { Main, Lang, Stylist, DateTime, ServicePage } from "@pages";
import { Header } from "@components";
import styled from "styled-components";

const Basic = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  margin: 0 auto;
`;

function App() {
  return (
    <Basic>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="lang" element={<Lang />} />
        <Route path="stylist" element={<Stylist />} />
        <Route path="date" element={<DateTime />} />
        <Route path="service" element={<ServicePage />} />
      </Routes>
    </Basic>
  );
}

export default App;
