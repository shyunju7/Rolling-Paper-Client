import * as React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { StickerContainer } from "./style";
import Draggable from "react-draggable";

const Sticker = () => {
  return (
    <Draggable>
      <StickerContainer />
    </Draggable>
  );
};

export default Sticker;
