import { Container, Title } from "./style";

interface HeaderProps {
  userName: string;
  text: string;
}

const Header = ({ userName, text }: HeaderProps) => {
  return (
    <Container>
      <Title>
        <span role="img" aria-label="message">
          🎀{" "}
        </span>
        {userName + text}
        <span role="img" aria-label="message">
          {" "}
          🎀
        </span>
      </Title>
    </Container>
  );
};

export default Header;
