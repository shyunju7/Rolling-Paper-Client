import * as React from "react";
import Sticker from "../components/Sticker";
import styled from "styled-components";
import { useState } from "react";
import InputDialog from "../components/InputDialog";

const Container = styled.div`
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
`;

interface MessagePosition {
  x: number;
  y: number;
}

interface Message {
  id: number;
  position: MessagePosition;
  disabled: boolean;
  color: string;
  userName: string;
  message: string;
}

const messageList: Message[] = [
  {
    id: 1,
    position: { x: 45, y: 24 },
    disabled: true,
    color: "#3BB4F9",
    userName: "나무친구",
    message: "안녕? 예지야 넌 멋진 어른이 될거야!!!",
  },
  {
    id: 2,
    position: { x: 705, y: 4 },
    disabled: true,
    color: "#F93BCF",
    userName: "돌맹이친구",
    message:
      "어이, 넌 너무 소심하고 조용해 내년엔 더 말도 많이 하는 친구가 되길 바랄께!",
  },
  {
    id: 3,
    position: { x: 445, y: 84 },
    disabled: true,
    color: "#F9AD3B",
    userName: "코끼리친구",
    message: "넌 정말 친절해.",
  },
  {
    id: 4,
    position: { x: 415, y: 424 },
    disabled: true,
    color: "#989898",
    userName: "호구마친구",
    message: "2학년 가도 잘지내",
  },
  {
    id: 5,
    position: { x: 65, y: 314 },
    disabled: true,
    color: "#3c2d",
    userName: "첵스초코친구",
    message: "예지얌 너랑 같은반이어서 좋았어 넌 참 귀여웡>_<",
  },
];

const Main = () => {
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages] = useState(messageList);

  return (
    <Container>
      <UserName onClick={() => setVisible(!isVisible)}>이예지</UserName>

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
            color={item.color}
            message={item.message}
            userName={item.userName}
          />
        ))}
    </Container>
  );
};

export default Main;
