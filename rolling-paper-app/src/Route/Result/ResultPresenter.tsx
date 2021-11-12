import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ userName }: any) => {
  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>
        결과
        <button>결과 공유</button>
        <button>다운로드</button>
      </Container>
    </div>
  );
};

export default ResultPresenter;
