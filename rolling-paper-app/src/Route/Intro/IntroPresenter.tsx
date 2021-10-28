import Loader from "../../Loader";
import { Container, Button, InputName, Title } from "./style";

const IntroPresenter = ({ userName, onChange, createUser, isLoading }: any) => {
  let link = "";

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Title>
        ROLLING PAPER
        <span role="img" aria-label="pen">
          ✏️
        </span>
      </Title>
      <InputName
        type="text"
        value={userName}
        onChange={onChange}
        placeholder="Your Name"
      />
      <Button onClick={createUser}>START</Button>
    </Container>
  );
};

export default IntroPresenter;
