import styled from "styled-components";
export const Container = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f1f2f5;
  padding-top: 20px;
`;

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  width: 80vw;
  margin-left: 40px;
`;

export const LinkWrapper = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #605757;
  border-radius: 32px;
  padding: 8px 16px;
`;

export const CopyButton = styled.div`
  position: absolute;
  right: 16px;
  top: 4px;
  font-weight: bold;
  color: #c4c4c4;
  cursor: pointer;
  &:hover {
    color: #605757;
  }
`;
