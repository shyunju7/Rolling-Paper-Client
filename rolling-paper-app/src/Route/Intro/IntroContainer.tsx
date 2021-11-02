import IntroPresenter from "./IntroPresenter";
import { userApi } from "../../api";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import { useEffect } from "react";
const IntroContainer = ({ history }: any) => {
  const { value, onChange, setValue }: any = useInput("");
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  console.log(`history : `, history);

  const createUser = () => {
    setLoading(true);
    userApi
      .createUser(value)
      .then((value) => {
        setLoading(false);
        history.push(`/paper/${value.data.data.link.linkcode}`);
      })
      .catch(function () {
        setErrorMsg(`error: createUser()...}`);
      })
      .then(function () {
        setValue("");
      });
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

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
