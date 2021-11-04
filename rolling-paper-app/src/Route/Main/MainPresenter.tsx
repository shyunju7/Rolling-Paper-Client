import { Container, UserName } from "./style";
import Header from "../../components/Header";
import Sticker from "../../components/Sticker";
import InputDialog from "../../components/InputDialog";
import { Message } from "../../interfaces/Message.interface";

const MainPresenter = ({
  isVisible,
  setVisible,
  setMessages,
  messages,
}: any) => {
  return (
    <div>
      <Header userName="아무개" />
      <Container>
        <UserName onClick={() => setVisible(!isVisible)}>개똥벌레</UserName>

        {isVisible ? (
          <InputDialog
            setVisible={setVisible}
            messages={messages}
            setMessages={setMessages}
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
              font={item.font}
              color={item.color}
              contents={item.color}
              author={item.author}
            />
          ))}
      </Container>
    </div>
  );
};

export default MainPresenter;
