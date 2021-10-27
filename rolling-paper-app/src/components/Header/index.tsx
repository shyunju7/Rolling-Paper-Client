import { Container, Title } from "./style";

interface User {
  userName: string;
}

const Header = ({ userName }: User) => {
  return (
    <Container>
      <Title>
        <span role="img" aria-label="message">
          🎀{" "}
        </span>
        {userName} 님을 위한 소중한 메세지를 작성해보세요!
        <span role="img" aria-label="message">
          {" "}
          🎀
        </span>
      </Title>
    </Container>
  );
};

export default Header;
