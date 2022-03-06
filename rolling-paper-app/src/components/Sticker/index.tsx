import { useState } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";

interface StickerProps {
  id: number;
  positionX: number;
  positionY: number;
  draggable: boolean;
  font: string;
  color: string;
  author: string;
  contents: string;
  saveMessage?: Function;
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
  saveMessage,
}: StickerProps) => {
  const [draggableMessage, setDraggableMessage] = useState(draggable);
  const [position, setPosition] = useState({
    positionX: 0,
    positionY: 0,
  });

  const trackPosition = (data: any) => {
    console.log(`data, `, data);
    setPosition({
      positionX: data.layerX,
      positionY: data.layerY,
    });
  };
  return (
    <Draggable
      disabled={!draggableMessage}
      onDrag={(data) => trackPosition(data)}
      position={{ x: position.positionX, y: position.positionY }}
    >
      <StickerContainer
        x={positionX}
        y={positionY}
        color={color}
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
              if (saveMessage) {
                saveMessage({
                  id: id,
                  author:
                    author && !author.startsWith(" ", 0) ? author : "익명",
                  color: color,
                  font: font,
                  contents: contents,
                  positionX: position.positionX,
                  positionY: position.positionY,
                  draggable: false,
                });
                setDraggableMessage(!draggableMessage);
              }
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
