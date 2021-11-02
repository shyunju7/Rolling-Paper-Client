import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const userApi = {
  createUser: (userName: string) =>
    api.post("/users", {
      username: userName,
    }),
};

export const messageApi = {
  getAllMessage: (linkCode: string) =>
    api.get(`message/result/${linkCode}`, {
      params: {
        linkcode: linkCode,
      },
    }),
};
