import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { Message, MessageDto } from "../../interfaces/Message.interface";
import { linkApi, messageApi } from "../../api";
import { useHistory } from "react-router-dom";

const messageList: Message[] = [];

const MainContainer = ({ location, userLink }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages]: any = useState(messageList);
  const [userName, setUserName] = useState("");
  const [newMessage, setNewMessage] = useState(null);
  const linkCode = userLink ? userLink : location.pathname.substring(7);
  const history = useHistory();
  const saveMessage = (newMessage: MessageDto) => {
    messageApi
      .createMessage(linkCode, newMessage)
      .then((value) => {
        alert("저장되었습니다:)");
        history.push("/");
      })
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
      messages={messages}
      setMessages={setMessages}
      saveMessage={saveMessage}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
    />
  );
};

export default MainContainer;
