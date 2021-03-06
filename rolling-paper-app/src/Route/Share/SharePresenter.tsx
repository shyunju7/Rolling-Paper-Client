import {
  Container,
  CopyButton,
  GoResultButton,
  Guide,
  LinkContainer,
  LinkWrapper,
} from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

interface ShareProps {
  copyClipBoard: Function;
  userName: string;
  userLink: string;
}

const SharePresenter = ({ copyClipBoard, userName, userLink }: ShareProps) => {
  const link = "http://localhost:3000/paper/" + userLink;
  const history = useHistory();
  const goResultPage = () => {
    history.push(`/result/${userLink}`);
  };
  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>
        <Guide>아래 링크를 친구들에게 공유해보세요!</Guide>

        <LinkContainer>
          <LinkWrapper
            type="text"
            value={link}
            readOnly
            className="copy-link"
            id="copy-link"
          />
          <CopyButton onClick={() => copyClipBoard()}> 복사하기</CopyButton>
        </LinkContainer>
        <GoResultButton onClick={goResultPage}>
          결과 확인하러 가기
        </GoResultButton>
      </Container>
    </div>
  );
};

export default SharePresenter;
