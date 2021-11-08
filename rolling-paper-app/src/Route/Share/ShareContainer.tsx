import { useState } from "react";
import { useEffect } from "react";
import { linkApi, messageApi } from "../../api";
import SharePresenter from "./SharePresenter";

const ShareContainer = ({ location }: any) => {
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
    if (!document.queryCommandSupported("copy")) {
      return alert(`복사하기 기능이 지원되지 않는 브라우저 입니다 :)`);
    }
    const copyText: any = document.getElementById("copy-link");

    copyText.select();
    document.execCommand("copy");
  };

  return (
    <SharePresenter
      copyClipBoard={copyClipBoard}
      userName={userName}
      userLink={location.pathname.substring(8)}
    />
  );
};
export default ShareContainer;
