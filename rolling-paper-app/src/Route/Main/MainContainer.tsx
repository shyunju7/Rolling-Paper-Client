import { useState } from "react";
import MainPresenter from "./MainPresenter";
import { Message } from "../../interfaces/Message.interface";

const messageList: Message[] = [
  {
    id: 5,
    position: { x: 65, y: 314 },
    disabled: true,
    font: "nanum",
    color: "#3c2d",
    userName: "첵스초코친구",
    message: "개똥벌레얌 너랑 같은반이어서 좋았어 넌 참 귀여웡>_<",
  },
];

const MainContainer = () => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages] = useState(messageList);
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
