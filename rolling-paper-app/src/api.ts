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
  getAllMessage: (id: any) =>
    api.get(`message/result/${id}`, {
      params: {
        linkid: id,
      },
    }),
};
