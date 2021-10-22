import * as React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { StickerContainer } from "./style";

const Sticker = () => {
  const element: React.RefObject<HTMLDivElement> = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const [originPosition, setOriginPosition] = useState({
    x: 0,
    y: 0,
  });

  document.addEventListener("mouseup", (e) => {
    setDragging(false);
    element.current?.removeEventListener("mousemove", () => {
      setDragging(false);
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      console.log(`doc x와 y  : `, e.clientX, e.clientY);
      const diffX = e.clientX - originPosition.x;
      const diffY = e.clientY - originPosition.y;

      const { width, height }: any = element.current?.getBoundingClientRect();
      const endWidth = document.body.clientWidth - width;
      const endHeight = document.body.clientHeight - height;

      // box dragging
      if (element.current) {
        element.current.style.left = `${Math.min(
          Math.max(0, element.current.offsetLeft + diffX),
          endWidth
        )}px`;
        element.current.style.top = `${Math.min(
          Math.max(0, element.current.offsetTop + diffY),
          endHeight
        )}px`;
      }
    }
  });

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mousedown", (e) => {
        setDragging(true);
        setOriginPosition({ x: e.clientX, y: e.clientY });

        console.log(`x&y : `, originPosition);
        // originLeft = box.offsetLeft;
        // originTop = box.offsetTop;
      });
    }
  });
  return <StickerContainer ref={element} />;
};

export default Sticker;
