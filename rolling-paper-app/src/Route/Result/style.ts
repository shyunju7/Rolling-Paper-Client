import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
`;

export const Button = styled.div`
  font-weight: bold;
  color: #c4c4c4;
  border: 2px solid #c4c4c4;
  padding: 4px 22px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #eca4a6;
    border: 2px solid #f9cfd0;
  }

  &:first-child {
    margin-right: 32px;
  }
`;

export const ResultImage = styled.div`
  width: 620px;
  height: 340px;
  border: 4px solid #dddddd;
  border-radius: 8px;
  margin-top: 52px;
`;
