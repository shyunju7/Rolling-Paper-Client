import * as React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { StickerContainer } from "./style";
import Draggable from "react-draggable";

interface Message {
  id: number;
  userName: string;
  message: string;
}

const Sticker = ({ message }: Message) => {
  return (
    <Draggable>
      <StickerContainer>{message}</StickerContainer>
    </Draggable>
  );
};

export default Sticker;
