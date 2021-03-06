import styled from "styled-components";

export const StickerContainer = styled.div<{
  x: number;
  y: number;
  fontValue: string;
}>`
  width: 300px;
  background-color: transparent;
  position: absolute;
  top: ${(props) => (props.y ? props.y : 0)}px;
  left: ${(props) => (props.x ? props.x : 0)}px;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => (props.color ? props.color : "#000000")};

  font-family: ${(props) =>
    props.fontValue !== null ? props.fontValue : "nanum"};
`;

export const Author = styled.h3<{ fontValue: string }>`
  font-size: 1rem;
  font-family: ${(props) =>
    props.fontValue !== null ? props.fontValue : "nanum"};
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
