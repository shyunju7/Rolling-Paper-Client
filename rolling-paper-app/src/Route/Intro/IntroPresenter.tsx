import Loader from "../../Loader";
import { Container, Button, SLink, InputName, Title } from "./style";

const IntroPresenter = ({ userName, onChange, createUser, isLoading }: any) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <h3 role="img" aria-label="decoIcon" style={{ margin: 0 }}>
        🐰 ❤️ 🐶
      </h3>
      {/* <Title>롤링 페이퍼 만들기</Title> */}

      <Title>제목이랑 소개/설명 내용 추가하기</Title>
      <InputName
        type="text"
        value={userName}
        onChange={onChange}
        placeholder="Your Name"
      />

      <Button onClick={createUser}>
        <SLink to="/user">START</SLink>
      </Button>
    </Container>
  );
};

export default IntroPresenter;
