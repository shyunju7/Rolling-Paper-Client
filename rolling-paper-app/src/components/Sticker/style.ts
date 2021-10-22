import styled from "styled-components";
interface Position {
  x: any;
  y: any;
}
export const StickerContainer = styled.div<{ x: any; y: any }>`
  width: 300px;
  background-color: transparent;
  position: absolute;
  top: ${(props) => (props.y ? props.y : 0)}px;
  left: ${(props) => (props.x ? props.x : 0)}px;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const Author = styled.h3`
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
