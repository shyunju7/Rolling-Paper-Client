import styled from "styled-components";
export const Container = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f1f2f5;
`;

export const UserName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  cursor: pointer;
  background-color: lavender;
  padding: 1rem;
  border-radius: 50%;
  z-index: 10;
`;
