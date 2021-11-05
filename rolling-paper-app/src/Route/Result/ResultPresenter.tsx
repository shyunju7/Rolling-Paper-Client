import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ copyClipBoard, userName }: any) => {
  return (
    <div>
      <Header userName={userName} text="의 롤링페이퍼" />

      <Container>
        <input
          type="text"
          value={window.location.href}
          readOnly
          className="copy-link"
          id="copy-link"
        />
        <button onClick={copyClipBoard}> 복사하기</button>
      </Container>
    </div>
  );
};

export default ResultPresenter;
