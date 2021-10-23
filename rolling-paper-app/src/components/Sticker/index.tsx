import * as React from "react";
import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";

interface MessagePosition {
  x: number;
  y: number;
}

interface Message {
  id: number;
  position: MessagePosition;
  disabled: boolean;
  font: number;
  color: string;
  userName: string;
  message: string;
}

const Sticker = ({
  message,
  userName,
  color,
  position,
  disabled,
  font,
}: Message) => {
  const { x, y } = position;
  const [disabledMessage, setDisabledMessage] = useState(disabled);
  return (
    <Draggable disabled={disabledMessage}>
      <StickerContainer
        x={x}
        y={y}
        color={color}
        disabled={disabledMessage}
        fontValue={font}
      >
        {message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <Author color={color} fontValue={font}>
          -{userName}-
        </Author>
        {disabledMessage ? null : (
          <button onClick={() => setDisabledMessage(!disabledMessage)}>
            저장하기
          </button>
        )}
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
