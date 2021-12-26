import styled from "styled-components";
export const Container = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f1f2f5;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Guide = styled.h3`
  margin-bottom: 8px;
`;

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  width: 80vw;
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
  top: 8px;
  font-weight: bold;
  color: #c4c4c4;
  cursor: pointer;
  &:hover {
    color: #605757;
  }
`;

export const GoResultButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  align-content: center;
  margin-top: 18px;
  padding: 12px;
  color: #eca4a6;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: #f9cfd0;
  }
`;
