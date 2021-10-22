import styled from "styled-components";

export const StickerContainer = styled.div`
  width: 300px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const Author = styled.h3`
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
