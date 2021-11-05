import { useState } from "react";
import { useEffect } from "react";
import { linkApi, messageApi } from "../../api";
import ResultPresenter from "./ResultPresenter";

const ResultContainer = ({ location }: any) => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    document.addEventListener("copy", copyClipBoard, true);

    return () => {
      document.removeEventListener("copy", copyClipBoard, true);
    };
  }, []);

  useEffect(() => {
    linkApi
      .getUserInfo(location.pathname.substring(7))
      .then((value) => setUserName(value.data.data[0].username))
      .catch(function () {
        alert(`사용자의 정보를 찾을 수 없습니다.`);
      });
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
    .getAllMessage(location.pathname.substring(8))
    .then((value) => {
      console.log(`value: `, value.data);
    })
    .catch(function () {
      alert(`유효하지 않은 url입니다.`);
    });

  return <ResultPresenter copyClipBoard={copyClipBoard} userName={userName} />;
};
export default ResultContainer;
