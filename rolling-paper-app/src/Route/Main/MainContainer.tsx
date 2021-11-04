import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { Message } from "../../interfaces/Message.interface";
import { messageApi } from "../../api";

const messageList: Message[] = [];

const MainContainer = ({ location }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages]: any = useState(messageList);

  useEffect(() => {
    messageApi
      .getAllMessage(location.pathname.substring(7))
      .then((messages) => {
        setMessages(messages.data);
      })
      .catch(function () {
        alert(`유효하지 않은 url입니다.`);
      });
  }, []);

  return (
    <MainPresenter
      isVisible={isVisible}
      setVisible={setVisible}
      messages={messages}
      setMessages={setMessages}
    />
  );
};

export default MainContainer;
