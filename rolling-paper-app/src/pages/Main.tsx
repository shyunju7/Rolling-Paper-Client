import Sticker from "../components/Sticker";
import styled from "styled-components";
import { useState } from "react";
import InputDialog from "../components/InputDialog";
import Header from "../components/Header";
import { Message } from "../interfaces/Message.interface";

const Container = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f1f2f5;
`;

const UserName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  cursor: pointer;
  background-color: lavender;
  padding: 1rem;
  border-radius: 50%;
  z-index: 10;
`;

const messageList: Message[] = [
  // {
  //   id: 5,
  //   position: { x: 65, y: 314 },
  //   disabled: true,
  //   font: 1,
  //   color: "#3c2d",
  //   userName: "첵스초코친구",
  //   message: "개똥벌레얌 너랑 같은반이어서 좋았어 넌 참 귀여웡>_<",
  // },
];

const Main = () => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages] = useState(messageList);

  return (
    <div>
      <Header userName="아무개" />
      <Container>
        <UserName onClick={() => setVisible(!isVisible)}>개똥벌레</UserName>

        {isVisible ? (
          <InputDialog
            setVisible={setVisible}
            messages={messages}
            setMessages={setMessages}
          />
        ) : null}

        {messages &&
          messages.map((item, index) => (
            <Sticker
              key={index}
              id={item.id}
              position={item.position}
              disabled={item.disabled}
              font={item.font}
              color={item.color}
              message={item.message}
              userName={item.userName}
            />
          ))}
      </Container>
    </div>
  );
};

export default Main;
