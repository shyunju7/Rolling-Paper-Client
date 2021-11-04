import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";

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
}: any) => {
  const [draggableMessage, setDraggableMessage] = useState(draggable);
  const [position, setPosition] = useState({
    positionX: 0,
    positionY: 0,
  });
  const trackPosition = (data: any) => {
    setPosition({
      positionX: data.x,
      positionY: data.y,
    });
  };
  return (
    <Draggable
      disabled={!draggableMessage}
      onStop={(data) => trackPosition(data)}
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
