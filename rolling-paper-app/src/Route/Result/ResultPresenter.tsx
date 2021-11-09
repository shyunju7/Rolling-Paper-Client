import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ userName }: any) => {
  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>결과</Container>
    </div>
  );
};

export default ResultPresenter;
