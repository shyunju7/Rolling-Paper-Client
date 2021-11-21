import { Container, UserName } from "./style";
import Header from "../../components/Header";
import Sticker from "../../components/Sticker";
import InputDialog from "../../components/InputDialog";
import { Message } from "../../interfaces/Message.interface";

const MainPresenter = ({
  userName,
  isVisible,
  setVisible,
  setMessages,
  messages,
  saveMessage,
  newMessage,
  setNewMessage,
}: any) => {
  return (
    <div>
      <Header userName={userName} text="님을 위한 메세지를 작성해보세요!" />
      <Container>
        <UserName onClick={() => setVisible(!isVisible)}>{userName}</UserName>

        {isVisible ? (
          <InputDialog
            setVisible={setVisible}
            messages={messages}
            setMessages={setMessages}
            saveMessage={saveMessage}
            setNewMessage={setNewMessage}
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
              saveMessage={saveMessage}
              font={item.font}
              color={item.color}
              contents={item.contents}
              author={item.author}
            />
          ))}

        {newMessage && (
          <Sticker
            id={newMessage.id}
            positionX={newMessage.positionX}
            positionY={newMessage.positionY}
            draggable={newMessage.draggable}
            saveMessage={saveMessage}
            font={newMessage.font}
            color={newMessage.color}
            contents={newMessage.contents}
            author={newMessage.author}
          />
        )}
      </Container>
    </div>
  );
};

export default MainPresenter;
