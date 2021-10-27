import { Link } from "react-router-dom";
import styled from "styled-components";
import { createSuper } from "typescript";
import { userApi } from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Description = styled.div`
  width: 50vw;
  background-color: #e7e7e8;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #565555;
  padding: 1rem;
  margin-top: 12px;
  margin-bottom: 8px;
  border-radius: 32px;
`;

const SLink = styled(Link)`
  color: #eca4a6;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #df9b9d;
  }
`;

const Button = styled.button`
  width: 50vw;
  border-radius: 32px;
  background-color: rgba(232, 212, 212, 0.5);
  border: 1px solid #eca4a6;
  align-content: center;

  padding: 0.5rem;
  &:hover {
    background-color: #e8d4d4;
  }
`;

const Intro = () => {
  const createUser = () => {
    try {
      userApi.createUser();
    } catch {
      console.log(`error...`);
    } finally {
      console.log("success!");
    }
  };

  return (
    <Container>
      <h3 role="img" aria-label="decoIcon" style={{ margin: 0 }}>
        🐰 ❤️ 🐶
      </h3>
      <Title>롤링 페이퍼 만들기</Title>

      <Description>
        For most program modifications, the process looks like the following:
        Set up a test environment in the DBMS Implement the modification in the
        test environment Use the copied live data as dummy data Activate the
        modification in test Fix bugs
      </Description>

      <Button onClick={createUser}>
        <SLink to="/user">START</SLink>
      </Button>
    </Container>
  );
};

export default Intro;
