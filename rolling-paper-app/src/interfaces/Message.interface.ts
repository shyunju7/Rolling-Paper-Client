interface MessagePosition {
  x: number;
  y: number;
}

export interface Message {
  id: number;
  positionX: number;
  positionY: number;
  draggable: boolean;
  font: string;
  color: string;
  author: string;
  contents: string;
}
