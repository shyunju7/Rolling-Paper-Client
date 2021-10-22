import * as React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Author, StickerContainer } from "./style";
import Draggable from "react-draggable";

interface Message {
  id: number;
  color: string;
  userName: string;
  message: string;
}

const Sticker = ({ message, userName, color }: Message) => {
  return (
    <Draggable>
      <StickerContainer color={color}>
        {message}
        <Author color={color}>-{userName}-</Author>
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
