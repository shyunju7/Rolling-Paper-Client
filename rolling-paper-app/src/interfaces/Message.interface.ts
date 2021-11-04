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

export interface MessageDto {
  author: string;
  positionX: number;
  positionY: number;
  draggable: boolean;
  font: string;
  color: string;
  contents: string;
}

export interface UpdateMessageDto {
  id: number;
  positionX: number;
  positionY: number;
  draggable: boolean;
}
