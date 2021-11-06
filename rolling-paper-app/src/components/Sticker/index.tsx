import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";
import { Message } from "../../interfaces/Message.interface";
import { idText } from "typescript";

interface StickerProps {
  id: number;
  positionX: number;
  positionY: number;
  draggable: boolean;
  font: string;
  color: string;
  author: string;
  contents: string;
  updateMessage: Function;
}

const Sticker = ({
  id,
  contents,
  author,
  color,
  positionX,
  positionY,
  draggable,
  font,
  updateMessage,
}: StickerProps) => {
  const [draggableMessage, setDraggableMessage] = useState(draggable);
  const [position, setPosition] = useState({
    positionX: 0,
    positionY: 0,
  });
  const trackPosition = (data: any) => {
    console.log(`data, `, data);
    setPosition({
      positionX: data.x,
      positionY: data.y,
    });
  };
  return (
    <Draggable
      disabled={!draggableMessage}
      onDrag={(data) => trackPosition(data)}
    >
      <StickerContainer
        x={positionX}
        y={positionY}
        color={color}
        draggable={draggableMessage}
        fontValue={font}
      >
        {contents.split("\n").map((line: string, index: number) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <Author color={color} fontValue={font}>
          -{author}-
        </Author>
        {!draggableMessage ? null : (
          <button
            onClick={() => {
              updateMessage({
                id: id,
                positionX: position.positionX,
                positionY: position.positionY,
                draggable: false,
              });
              setDraggableMessage(!draggableMessage);
            }}
          >
            저장하기
          </button>
        )}
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
