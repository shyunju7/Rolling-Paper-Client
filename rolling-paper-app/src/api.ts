import axios from "axios";
import { Message, MessageDto } from "./interfaces/Message.interface";

const api = axios.create({
  baseURL: "/",
});

export const userApi = {
  createUser: (userName: string) =>
    api.post("/users", {
      username: userName,
    }),
};

export const linkApi = {
  getUserInfo: (linkCode: string) =>
    api.get(`/link/user/${linkCode}`, {
      params: {
        linkCode: linkCode,
      },
    }),
};

export const messageApi = {
  createMessage: (id: any, message: MessageDto) =>
    api.post(`message/${id}`, message, {
      headers: { "Content-Type": `application/json` },
    }),

  getAllMessage: (linkCode: string) =>
    api.get(`message/result/${linkCode}`, {
      params: {
        linkcode: linkCode,
      },
    }),
};
