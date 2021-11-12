import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ userName, userLink }: any) => {
  const shareResultLink = () => {
    const link = "http://localhost:3000/result/" + userLink;
    alert(link);
  };

  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>
        결과
        <button onClick={shareResultLink}>결과 공유</button>
        <button>다운로드</button>
      </Container>
    </div>
  );
};

export default ResultPresenter;
