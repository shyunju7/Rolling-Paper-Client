import { Container, Title } from "./style";

const Header = ({ setVisible, messages, setMessages }: any) => {
  return (
    <Container>
      <Title>
        <span role="img" aria-label="message">
          🎀{" "}
        </span>
        개똥벌레 님을 위한 소중한 메세지를 작성해보세요!
        <span role="img" aria-label="message">
          {" "}
          🎀
        </span>
      </Title>
    </Container>
  );
};

export default Header;
