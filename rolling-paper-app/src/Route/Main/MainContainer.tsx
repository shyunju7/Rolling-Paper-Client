import { useState } from "react";
import MainPresenter from "./MainPresenter";
import { Message } from "../../interfaces/Message.interface";
import { messageApi } from "../../api";

const messageList: Message[] = [
  // {
  //   id: 5,
  //   position: { x: 65, y: 314 },
  //   disabled: true,
  //   font: "nanum",
  //   color: "#3c2d",
  //   userName: "첵스초코친구",
  //   message: "개똥벌레얌 너랑 같은반이어서 좋았어 넌 참 귀여웡>_<",
  // },
];

const MainContainer = ({ location }: any) => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages]: any = useState(messageList);

  messageApi
    .getAllMessage(location.pathname.substring(7))
    .then((messages) => {
      setMessages(messages.data);
    })
    .catch(function () {
      alert(`유효하지 않은 url입니다.`);
    });

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
