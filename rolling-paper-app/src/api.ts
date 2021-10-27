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
