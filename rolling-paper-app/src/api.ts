import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const userApi = {
  createUser: () =>
    api.post("/users", {
      username: "testName",
    }),
};
