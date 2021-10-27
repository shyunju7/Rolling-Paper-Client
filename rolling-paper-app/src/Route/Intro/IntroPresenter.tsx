import { Container, Button, SLink } from "./style";

const IntroPresenter = ({ userName, onChange, createUser }: any) => {
  return (
    <Container>
      <h3 role="img" aria-label="decoIcon" style={{ margin: 0 }}>
        🐰 ❤️ 🐶
      </h3>
      {/* <Title>롤링 페이퍼 만들기</Title> */}

      {/* <Description>
    For most program modifications, the process looks like the following:
    Set up a test environment in the DBMS Implement the modification in the
    test environment Use the copied live data as dummy data Activate the
    modification in test Fix bugs
  </Description> */}

      <input
        type="text"
        value={userName}
        onChange={onChange}
        placeholder="이름을 입력하세요!"
      />

      <Button onClick={createUser}>
        <SLink to="/user">START</SLink>
      </Button>
    </Container>
  );
};

export default IntroPresenter;
