import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import {
  Message,
  MessageDto,
  UpdateMessageDto,
} from "../../interfaces/Message.interface";
import { linkApi, messageApi } from "../../api";

const messageList: Message[] = [];

const MainContainer = ({ location }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages]: any = useState(messageList);
  const [userName, setUserName] = useState("");

  const updateMessage = (updateMessage: UpdateMessageDto) => {
    messageApi
      .updateMessage(location.pathname.substring(7), updateMessage)
      .then((value) => {
        alert(`저장이 완료되었습니다:)`);
        location.reload();
      })
      .catch(function () {
        alert(`업데이트 실패`);
      });
  };

  const saveMessage = (newMessage: MessageDto) => {
    messageApi
      .createMessage(location.pathname.substring(7), newMessage)
      .then((value) => console.log(`value`))
      .catch(function () {
        alert(`등록실패`);
      });
  };

  useEffect(() => {
    linkApi
      .getUserInfo(location.pathname.substring(7))
      .then((value) => setUserName(value.data.data[0].username))
      .catch(function () {
        alert(`사용자의 정보를 찾을 수 없습니다.`);
      });
  }, []);

  useEffect(() => {
    console.log(`새로고침??`);
    messageApi
      .getAllMessage(location.pathname.substring(7))
      .then((messages) => {
        setMessages(messages.data);
      })
      .catch(function () {
        alert(`유효하지 않은 url입니다.`);
      });
  }, [isVisible]);

  return (
    <MainPresenter
      isVisible={isVisible}
      userName={userName}
      setVisible={setVisible}
      updateMessage={updateMessage}
      messages={messages}
      setMessages={setMessages}
      saveMessage={saveMessage}
    />
  );
};

export default MainContainer;
