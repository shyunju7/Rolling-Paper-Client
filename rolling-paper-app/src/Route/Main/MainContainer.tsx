import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { Message, MessageDto } from "../../interfaces/Message.interface";
import { messageApi } from "../../api";

const messageList: Message[] = [];

const MainContainer = ({ location }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages]: any = useState(messageList);

  const saveMessage = (newMessage: MessageDto) => {
    console.log(`newMessage ?`, newMessage);
    messageApi
      .createMessage(location.pathname.substring(7), newMessage)
      .then((value) => console.log(`value`))
      .catch(function () {
        alert(`등록실패`);
      });
  };

  useEffect(() => {
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
      setVisible={setVisible}
      messages={messages}
      setMessages={setMessages}
      saveMessage={saveMessage}
    />
  );
};

export default MainContainer;
