import * as React from "react";
import Sticker from "../components/Sticker";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ffff0f;
`;

const Main = () => {
  return (
    <Container>
      <h1>MAIN</h1>
      <Sticker />
      <Sticker />
      <Sticker />
    </Container>
  );
};

export default Main;
