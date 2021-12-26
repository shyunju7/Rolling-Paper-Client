import { useCallback, useState } from "react";
import {
  ButtonContainer,
  TextSettingContainer,
  TextSetting,
  Container,
  InputContainer,
  InputMessage,
  Button,
  Title,
  AuthorContainer,
  AuthorInput,
  AuthorNotice,
  PickedColor,
  SelectFont,
} from "./style";
import { useInput } from "../../hooks/useInput";
import { TwitterPicker } from "react-color";
import { Message, MessageDto } from "../../interfaces/Message.interface";
import { useEffect } from "react";

interface DialogType {
  setVisible: Function;
  messages: Message[];
  setMessages: Function;
  saveMessage: Function;
  setNewMessage: Function;
}

const InputDialog = ({
  setVisible,
  messages,
  setMessages,
  setNewMessage,
  saveMessage,
}: DialogType) => {
  const { value, onChange, setValue }: any = useInput("");
  const {
    value: author,
    setValue: setAuthor,
    onChange: onChangeAuthor,
  } = useInput("");
  const [fontValue, setFontValue] = useState("IM_Hyemin-Bold");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontDropdown, setShowFontDropdown] = useState(false);
  const [pickedColor, setColor] = useState("#000000");

  const handleSetColor = (color: any) => {
    setColor(color.hex);
  };

  const replaceNewline = () => {
    return setValue(value.replaceAll("<br>", "\r\n"));
  };

  const changeFontSize = useCallback(
    (e) => {
      const value = e.target.value;
      setFontValue(value);
    },
    [setFontValue]
  );

  useEffect(() => {
    setShowColorPicker(false);
  }, [pickedColor]);

  return (
    <Container>
      <Title>
        <span role="img" aria-label="message">
          ⭐️{" "}
        </span>
        메세지 작성하기
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
            <PickedColor color={pickedColor} />
          </TextSetting>
          <TextSetting
            aria-label="fontPicker"
            role="img"
            onClick={() => {
              if (showColorPicker) setShowColorPicker(false);
              setShowFontDropdown(!showFontDropdown);
            }}
          >
            <SelectFont onChange={changeFontSize} value={fontValue}>
              <option value="IM_Hyemin-Bold">IM혜민체 Bold</option>
              <option value="HSYuji-Regular">HS유지체</option>
              <option value="UhBeeJJIBBABBA">어비 찌빠빠체</option>
              <option value="UhBeeQUEENJ">어비 퀸제이체</option>
            </SelectFont>
          </TextSetting>
        </TextSettingContainer>

        {showColorPicker ? (
          <TwitterPicker
            width="140px"
            color={pickedColor}
            onChangeComplete={handleSetColor}
            colors={[
              "#FF6900",
              "#FCB900",
              "#00D084",
              "#8ED1FC",
              "#0693E3",
              "#EB144C",
              "#F78DA7",
              "#9900EF",
            ]}
          />
        ) : null}
      </InputContainer>
      <InputMessage
        color={pickedColor}
        value={value}
        fontValue={fontValue}
        onChange={onChange}
        placeholder="내용을 입력해주세요!(100자 이내)"
      />
      <AuthorContainer>
        <AuthorInput
          type="text"
          value={author}
          onChange={onChangeAuthor}
          placeholder="작성자 이름"
        />
        <AuthorNotice>미입력시, 익명으로 이름이 추가됩니다:)</AuthorNotice>
      </AuthorContainer>

      <ButtonContainer>
        <Button
          bgColor="#d4d4d4"
          color="#ffffff"
          onClick={() => setVisible(false)}
        >
          {" "}
          닫기
        </Button>
        <Button
          bgColor="#eca4a9"
          color="#ffffff"
          onClick={(e: any) => {
            console.log(e);
            if (value.length <= 0) {
              alert("내용을 입력해주세요!");
              return;
            }

            replaceNewline();
            const newMessage: MessageDto = {
              author: author && !author.startsWith(" ", 0) ? author : "익명",
              color: pickedColor,
              positionX: 0,
              positionY: 0,
              font: fontValue,
              draggable: true,
              contents: value,
            };

            setNewMessage(newMessage);
            setValue("");
            setAuthor("");
            setColor("#000000");
            setVisible(false);
          }}
        >
          작성하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default InputDialog;
