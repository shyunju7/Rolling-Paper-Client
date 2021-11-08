import { Container, CopyButton, LinkContainer, LinkWrapper } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ copyClipBoard, userName, userLink }: any) => {
  const link = "http://localhost:3000/paper/" + userLink;

  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>
        <h3>아래 링크를 친구들에게 공유해보세요!</h3>

        <LinkContainer>
          <LinkWrapper
            type="text"
            value={link}
            readOnly
            className="copy-link"
            id="copy-link"
          />
          <CopyButton onClick={copyClipBoard}> 복사하기</CopyButton>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default ResultPresenter;
