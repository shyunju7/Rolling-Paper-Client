import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";
import { Message } from "../../interfaces/Message.interface";

const Sticker = ({
  contents,
  author,
  color,
  positionX,
  positionY,
  draggable,
  font,
}: Message) => {
  const [draggableMessage, setDraggableMessage] = useState(!draggable);

  return (
    <Draggable disabled={draggableMessage}>
      <StickerContainer
        x={positionX}
        y={positionY}
        color={color}
        draggable={draggable}
        fontValue={font}
      >
        {contents}
        {/* {contents.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))} */}
        <Author color={color} fontValue={font}>
          -{author}-
        </Author>
        {draggableMessage ? null : (
          <button onClick={() => setDraggableMessage(!draggableMessage)}>
            저장하기
          </button>
        )}
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
