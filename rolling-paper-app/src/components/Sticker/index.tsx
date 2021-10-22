import * as React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";

interface MessagePosition {
  x: number;
  y: number;
}

interface Message {
  id: number;
  position: MessagePosition;
  color: string;
  userName: string;
  message: string;
}

const Sticker = ({ message, userName, color, position }: Message) => {
  const { x, y } = position;

  console.log(`x`, x, `y`, y);
  return (
    <Draggable>
      <StickerContainer x={x} y={y} color={color}>
        {message}
        <Author color={color}>-{userName}-</Author>
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
