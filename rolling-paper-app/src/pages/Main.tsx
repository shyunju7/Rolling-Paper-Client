import * as React from "react";
import Sticker from "../components/Sticker";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useInput } from "../hooks/useInput";
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
`;

interface Message {
  id: number;
  userName: string;
  message: string;
}

const messageList: Message[] = [
  {
    id: 1,
    userName: "나무친구",
    message: "안녕? 지건아 넌 멋진 어른이 될거야!!!",
  },
  {
    id: 2,
    userName: "돌맹이친구",
    message: "어이, 공! 넌 정말 탱탱햇지 마치 탱탱볼처럼 키키",
  },
  { id: 3, userName: "코끼리친구", message: "넌 정말 친절해." },
  { id: 4, userName: "호구마친구", message: "2학년 가도 잘지내" },
  {
    id: 5,
    userName: "첵스초코친구",
    message: "지거나 너랑 같은반이어서 좋았어 넌 참 귀여웡>_<",
  },
];

const Main = () => {
  const { value, onChange, setValue }: any = useInput("");
  const [messages, setMessags] = useState(messageList);
  const nextId = useRef(4);
  return (
    <Container>
      <UserName>공지건</UserName>
      <button
        onClick={() => {
          console.log("click");
          const newMessage = {
            id: nextId.current,
            userName: "익명",
            message: value,
          };
          setMessags([...messages, newMessage]);
          nextId.current += 1;
          setValue("");
        }}
      >
        글쓰기
      </button>

      <div>
        <input type="text" value={value} onChange={onChange} />
      </div>

      {messages &&
        messages.map((item, index) => (
          <Sticker
            key={index}
            id={item.id}
            message={item.message}
            userName={item.userName}
          />
        ))}
    </Container>
  );
};

export default Main;
