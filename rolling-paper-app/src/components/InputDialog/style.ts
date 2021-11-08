import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 45vh;
  background-color: #ffffff;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 30px;
`;

export const InputMessage = styled.textarea<{ fontValue: string }>`
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  width: 90%;
  height: 15vh;
  margin-top: 16px;
  padding-left: 16px;
  font-family: ${(props) =>
    props.fontValue !== null ? props.fontValue : "OwnGlyph"};
  color: ${(props) => (props.color ? props.color : "#000000")};
  resize: none;
  &:focus {
    outline: none;
    border: 2px solid #f9d5d3;
  }
`;

export const TextSettingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
`;

export const TextSetting = styled.span`
  cursor: pointer;
  margin-left: 8px;
`;

export const AuthorContainer = styled.div`
  width: 90%;
  height: 20px;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const AuthorInput = styled.input`
  width: 30vw;
  font-size: 16px;
  outline: none;
  border: none;
`;

export const AuthorNotice = styled.label`
  font-size: 12px;
  color: #757567;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  justify-content: center;
  width: 90%;
  height: 40px;
`;

export const Button = styled.button<{ bgColor: string; color: string }>`
  width: 8vw;
  margin: 2px;
  border: 1px solid #ffffff;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffffff")};
  color: ${(props) => (props.color ? props.color : "#d4d4d4")};
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    border:  ${(props) =>
      props.bgColor ? "1px solid" + props.bgColor : "none"};
`;
