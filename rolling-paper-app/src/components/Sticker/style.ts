import styled from "styled-components";

export const StickerContainer = styled.div<{
  x: number;
  y: number;
  disabled: boolean;
}>`
  width: 300px;
  background-color: transparent;
  position: absolute;
  top: ${(props) => (props.y ? props.y : 0)}px;
  left: ${(props) => (props.x ? props.x : 0)}px;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => (props.color ? props.color : "#000000")};

  border: ${(props) => (props.disabled ? "none" : "1px dotted #c4c4c4")};
`;

export const Author = styled.h3`
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
