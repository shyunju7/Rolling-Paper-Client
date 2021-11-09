import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ copyClipBoard, userName, userLink }: any) => {
  const link = "http://localhost:3000/paper/" + userLink;

  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <Container>결과</Container>
    </div>
  );
};

export default ResultPresenter;
