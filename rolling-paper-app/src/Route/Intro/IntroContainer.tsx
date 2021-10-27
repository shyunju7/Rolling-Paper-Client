import IntroPresenter from "./IntroPresenter";
import { userApi } from "../../api";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
const IntroContainer = () => {
  const { value, onChange, setValue }: any = useInput("");
  const [isLoading, setLoading] = useState(false);
  const createUser = () => {
    try {
      setLoading(true);
      userApi.createUser(value);
      setValue("");
    } catch {
      console.log(`error...`);
    } finally {
      setLoading(false);
      console.log("정상적으로 등록 처리 되었습니다:)");
    }
  };
  return (
    <IntroPresenter
      userName={value}
      createUser={createUser}
      onChange={onChange}
      isLoading={isLoading}
    />
  );
};

export default IntroContainer;
