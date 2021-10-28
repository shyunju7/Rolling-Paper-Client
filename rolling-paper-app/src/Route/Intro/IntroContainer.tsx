import IntroPresenter from "./IntroPresenter";
import { userApi } from "../../api";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
const IntroContainer = () => {
  const { value, onChange, setValue }: any = useInput("");
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const setUserInfo = (name: string, link: string) => {
    if (name && name.length > 0 && link && link.length > 0) {
      // data가 set됐다면 -> link page로 이동
    }
  };

  const createUser = () => {
    setLoading(true);
    userApi
      .createUser(value)
      .then((value) => {
        setUserInfo(value.data.data.username, value.data.data.link.linkcode);
        setLoading(false);
      })
      .catch(function (error) {
        setErrorMsg(`error: createUser()...`);
      })
      .then(function () {
        setValue("");
      });
  };

  return (
    <IntroPresenter
      userName={value}
      createUser={createUser}
      onChange={onChange}
      isLoading={isLoading}
      error={errorMsg}
    />
  );
};

export default IntroContainer;
