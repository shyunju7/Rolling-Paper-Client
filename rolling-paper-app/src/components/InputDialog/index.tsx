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

interface DialogType {
  setVisible: Function;
  messages: Message[];
  setMessages: Function;
  saveMessage: Function;
}

const InputDialog = ({
  setVisible,
  messages,
  setMessages,
  saveMessage,
}: DialogType) => {
  const { value, onChange, setValue }: any = useInput("");
  const {
    value: author,
    setValue: setAuthor,
    onChange: onChangeAuthor,
  } = useInput("");
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

      <div>
        <label>작성자</label>
        <input type="text" value={author} onChange={onChangeAuthor} />
        <input type="checkbox" value="익명" />
        <label>익명</label>
      </div>

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
            console.log(e);
            if (value.length <= 0) {
              alert("내용을 입력해주세요!");
              return;
            }

            replaceNewline();
            const newMessage: MessageDto = {
              author: author,
              color: pickedColor,
              positionX: 0,
              positionY: 0,
              font: fontValue,
              draggable: true,
              contents: value,
            };

            saveMessage(newMessage);
            setValue("");
            setAuthor("");
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
