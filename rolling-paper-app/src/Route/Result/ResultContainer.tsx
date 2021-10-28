import { useEffect } from "react";
import ResultPresenter from "./ResultPresenter";

const ResultContainer = () => {
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
    console.log(`copy 완료!`);
  };

  return <ResultPresenter copyClipBoard={copyClipBoard} />;
};
export default ResultContainer;
