import { useEffect } from "react";
import { messageApi } from "../../api";
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
  };
  messageApi
    .getAllMessage(91)
    .then((value) => {
      console.log(`value: `, value);
    })
    .catch(function () {
      console.log(`error...`);
    });

  return <ResultPresenter copyClipBoard={copyClipBoard} />;
};
export default ResultContainer;
