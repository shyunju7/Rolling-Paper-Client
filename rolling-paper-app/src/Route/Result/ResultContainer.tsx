import { useState } from "react";
import { useEffect } from "react";
import { linkApi, messageApi } from "../../api";
import ResultPresenter from "./ResultPresenter";

const ResultContainer = ({ location }: any) => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    linkApi
      .getUserInfo(location.pathname.substring(8))
      .then((value) => setUserName(value.data.data[0].username))
      .catch(function () {
        console.log(`사용자의 정보를 찾을 수 없습니다.`);
      });
  }, []);

  // messageApi
  //   .getAllMessage(location.pathname.substring(8))
  //   .then((value) => {
  //     console.log(`value: `, value.data);
  //   })
  //   .catch(function () {
  //     console.log(`유효하지 않은 url입니다.`);
  //   });
  return (
    <ResultPresenter
      userName={userName}
      userLink={location.pathname.substring(8)}
    />
  );
};
export default ResultContainer;
