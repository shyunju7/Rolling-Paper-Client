import { useState, useRef } from "react";
import {
  ButtonContainer,
  ColorPicker,
  Container,
  InputContainer,
  InputMessage,
  Button,
  Title,
} from "./style";
import { useInput } from "../../hooks/useInput";
import { TwitterPicker } from "react-color";

interface Message {
  id: number;
  color: string;
  disabled: boolean;
  userName: string;
  message: string;
}

const InputDialog = ({ setVisible, messages, setMessages }: any) => {
  const { value, onChange, setValue }: any = useInput("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pickedColor, setColor] = useState("#000000");
  const nextId = useRef(5);

  const handleSetColor = (color: any) => {
    setColor(color.hex);
  };

  const replaceNewline = () => {
    return setValue(value.replaceAll("<br>", "\r\n"));
  };
  return (
    <Container>
      <Title>
        <span role="img" aria-label="message">
          ⭐️{" "}
        </span>
        친구에게 남길 소중한 메세지를 입력해주세요!
        <span role="img" aria-label="message">
          {" "}
          ⭐️
        </span>
      </Title>
      <ColorPicker
        aria-label="colorPicker"
        role="img"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        🎨
      </ColorPicker>
      <InputContainer>
        <InputMessage color={pickedColor} value={value} onChange={onChange} />
        {showColorPicker ? (
          <TwitterPicker
            color={pickedColor}
            onChangeComplete={handleSetColor}
          />
        ) : null}
      </InputContainer>

      <ButtonContainer>
        <Button onClick={() => setVisible(false)}> 닫기</Button>
        <Button
          onClick={() => {
            replaceNewline();
            console.log(`value`, value);
            const newMessage = {
              id: nextId.current,
              color: pickedColor,
              position: { x: 0, y: 0 },
              disabled: false,
              userName: "익명",
              message: value,
            };
            setMessages([...messages, newMessage]);
            nextId.current += 1;
            setValue("");
            setColor("#000000");
            setVisible(false);
          }}
        >
          저장하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default InputDialog;
