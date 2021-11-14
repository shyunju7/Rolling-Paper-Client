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
  const [isUpdateMessage, setUpdateMessage] = useState(false);
  const linkCode = location.pathname.substring(7);
  const updateMessage = (updateMessage: UpdateMessageDto) => {
    messageApi
      .updateMessage(linkCode, updateMessage)
      .then((value) => {
        setUpdateMessage(true);
        alert(`저장이 완료되었습니다:)`);
        window.location.replace(`/paper/${linkCode}`);
      })
      .catch(function () {
        console.log(`not update..`);
      });
  };

  const saveMessage = (newMessage: MessageDto) => {
    messageApi
      .createMessage(linkCode, newMessage)
      .then((value) => console.log(`value`))
      .catch(function () {
        alert(`not save..`);
      });
  };

  useEffect(() => {
    linkApi
      .getUserInfo(linkCode)
      .then((value) => setUserName(value.data.data[0].username))
      .catch(function () {
        alert(`사용자의 정보를 찾을 수 없습니다.`);
      });
  }, []);

  useEffect(() => {
    messageApi
      .getAllMessage(linkCode)
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
