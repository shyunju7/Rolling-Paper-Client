import { useState } from "react";
import {
  ButtonContainer,
  TextSettingContainer,
  TextSetting,
  Container,
  InputContainer,
  InputMessage,
  Button,
  Title,
} from "./style";
import { useInput } from "../../hooks/useInput";
import { TwitterPicker } from "react-color";
import FontDropdown from "../FontDropdown";
import { Message, MessageDto } from "../../interfaces/Message.interface";
import { messageApi } from "../../api";

interface DialogType {
  setVisible: Function;
  messages: Message[];
  setMessages: Function;
}

const InputDialog = ({ setVisible, messages, setMessages }: DialogType) => {
  const { value, onChange, setValue }: any = useInput("");
  const [fontValue, setFontValue] = useState("nanum");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontDropdown, setShowFontDropdown] = useState(false);
  const [pickedColor, setColor] = useState("#000000");

  const handleSetColor = (color: any) => {
    setColor(color.hex);
  };

  const replaceNewline = () => {
    return setValue(value.replaceAll("<br>", "\r\n"));
  };

  const saveMessage = (newMessage: MessageDto) => {
    console.log(`newMessage ?`, newMessage);
    messageApi
      .createMessage(91, newMessage)
      .then((value) => console.log(`value`))
      .catch(function () {
        alert(`등록실패`);
      });
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

      <InputContainer>
        <TextSettingContainer>
          <TextSetting
            aria-label="colorPicker"
            role="img"
            onClick={() => {
              if (showFontDropdown) setShowFontDropdown(false);
              setShowColorPicker(!showColorPicker);
            }}
          >
            🎨
          </TextSetting>
          <TextSetting aria-label="colorPicker" role="img">
            🛠
          </TextSetting>
          <TextSetting
            aria-label="colorPicker"
            role="img"
            onClick={() => {
              if (showColorPicker) setShowColorPicker(false);
              setShowFontDropdown(!showFontDropdown);
            }}
          >
            ✏️
          </TextSetting>
        </TextSettingContainer>

        {showFontDropdown ? <FontDropdown setFontValue={setFontValue} /> : null}

        {console.log(fontValue)}
        {showColorPicker ? (
          <TwitterPicker
            color={pickedColor}
            onChangeComplete={handleSetColor}
          />
        ) : null}
      </InputContainer>
      <InputMessage
        color={pickedColor}
        value={value}
        fontValue={fontValue}
        onChange={onChange}
      />
      <ButtonContainer>
        <Button onClick={() => setVisible(false)}> 닫기</Button>
        <Button
          onClick={(e: any) => {
            if (value.length <= 0) {
              alert("내용을 입력해주세요!");
              return;
            }

            replaceNewline();
            const newMessage: MessageDto = {
              author: "익명",
              color: pickedColor,
              positionX: e.clientX,
              positionY: e.clientY,
              font: fontValue,
              draggable: true,
              contents: value,
            };

            saveMessage(newMessage);
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
