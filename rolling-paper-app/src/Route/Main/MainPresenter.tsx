import { Container, UserName } from "./style";
import Header from "../../components/Header";
import Sticker from "../../components/Sticker";
import InputDialog from "../../components/InputDialog";
import { Message } from "../../interfaces/Message.interface";

const MainPresenter = ({
  userName,
  isVisible,
  updateMessage,
  setVisible,
  setMessages,
  messages,
  saveMessage,
}: any) => {
  return (
    <div>
      <Header userName={userName} />
      <Container>
        <UserName onClick={() => setVisible(!isVisible)}>{userName}</UserName>

        {isVisible ? (
          <InputDialog
            setVisible={setVisible}
            messages={messages}
            setMessages={setMessages}
            saveMessage={saveMessage}
          />
        ) : null}

        {messages &&
          messages.map((item: Message, index: number) => (
            <Sticker
              key={index}
              id={item.id}
              positionX={item.positionX}
              positionY={item.positionY}
              draggable={item.draggable}
              updateMessage={updateMessage}
              font={item.font}
              color={item.color}
              contents={item.contents}
              author={item.author}
            />
          ))}
      </Container>
    </div>
  );
};

export default MainPresenter;
