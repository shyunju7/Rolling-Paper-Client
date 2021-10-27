interface MessagePosition {
  x: number;
  y: number;
}

export interface Message {
  id: number;
  position: MessagePosition;
  disabled: boolean;
  font: string;
  color: string;
  userName: string;
  message: string;
}
