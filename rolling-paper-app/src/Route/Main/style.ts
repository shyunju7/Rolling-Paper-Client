import styled from "styled-components";
export const Container = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: calc(100vh - 50px);
  position: relative;
  background-color: #f1f2f5;
`;

export const UserName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  cursor: pointer;
`;
