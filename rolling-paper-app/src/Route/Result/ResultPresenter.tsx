import { Container } from "./style";
import Header from "../../components/Header";
const ResultPresenter = ({ userName, userLink, downloadCaptureImage }: any) => {
  const shareResultLink = () => {
    const link = "http://localhost:3000/result/" + userLink;
    alert(link);
  };

  const captureDiv: any = document.querySelector("#resultImage");

  return (
    <div>
      <Header userName={userName} text="님의 롤링페이퍼" />

      <div id="resultImage">hello 여기 캡쳐하세용</div>
      <Container>
        결과
        <button onClick={shareResultLink}>결과 공유</button>
        <button onClick={downloadCaptureImage(captureDiv)}>다운로드</button>
      </Container>
    </div>
  );
};

export default ResultPresenter;
