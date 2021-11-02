import { useEffect } from "react";
import { messageApi } from "../../api";
import ResultPresenter from "./ResultPresenter";

const ResultContainer = ({ location }: any) => {
  useEffect(() => {
    document.addEventListener("copy", copyClipBoard, true);

    return () => {
      document.removeEventListener("copy", copyClipBoard, true);
    };
  }, []);

  const copyClipBoard = () => {
    console.log("copyClipboard()...");
    if (!document.queryCommandSupported("copy")) {
      return alert(`복사하기 기능이 지원되지 않는 브라우저 입니다 :)`);
    }
    const copyText: any = document.getElementById("copy-link");

    copyText.select();
    document.execCommand("copy");
  };

  console.log(`loc,`, location.pathname.substring(8));

  messageApi
    .getAllMessage(location.pathname.substring(8))
    .then((value) => {
      console.log(`value: `, value);
    })
    .catch(function () {
      alert(`유효하지 않은 url입니다.`);
    });

  return <ResultPresenter copyClipBoard={copyClipBoard} />;
};
export default ResultContainer;
