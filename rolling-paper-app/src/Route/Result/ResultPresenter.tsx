import { Container } from "./style";
import Header from "../../components/Header";
import Sticker from "../../components/Sticker";
import { Message } from "../../interfaces/Message.interface";

const ResultPresenter = ({ userName, data }: any) => (
  <div>
    <Header userName={userName} text="님의 롤링페이퍼" />
    <Container>
      {data &&
        data.map((item: Message, index: number) => (
          <Sticker
            key={index}
            id={item.id}
            positionX={item.positionX}
            positionY={item.positionY}
            draggable={item.draggable}
            font={item.font}
            color={item.color}
            contents={item.contents}
            author={item.author}
          />
        ))}
    </Container>
  </div>
);

export default ResultPresenter;
