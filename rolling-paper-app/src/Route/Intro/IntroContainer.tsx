import IntroPresenter from "./IntroPresenter";
import { userApi } from "../../api";
import { useInput } from "../../hooks/useInput";
const IntroContainer = () => {
  const { value, onChange, setValue }: any = useInput("");

  const createUser = () => {
    try {
      userApi.createUser(value);
      setValue("");
    } catch {
      console.log(`error...`);
    } finally {
      console.log("정상적으로 등록 처리 되었습니다:)");
    }
  };
  return (
    <IntroPresenter
      userName={value}
      createUser={createUser}
      onChange={onChange}
    />
  );
};

export default IntroContainer;
