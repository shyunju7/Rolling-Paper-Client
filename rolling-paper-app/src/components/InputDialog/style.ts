import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 40vh;
  background-color: #f1f2f5;
  border: 2px solid #c6c6c6;
  border-radius: 16px;
  box-shadow: 5px 5px 5px #aaa;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;

export const InputContainer = styled.div`
  margin-top: 12px;
  display: flex;
  position: absolute;
  top: 60px;
  flex-direction: column;
  align-items: center;
`;

export const InputMessage = styled.textarea`
  border: none;
  width: 40vw;
  height: 15vh;
  border-radius: 32px;
  padding: 12px;
  margin-top: 16px;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const ColorPicker = styled.span`
  cursor: pointer;
  margin-left: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
`;

export const Button = styled.button`
  width: 20vw;
  margin: 2px;
`;
