import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";
import { Message } from "../../interfaces/Message.interface";

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
