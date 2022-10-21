import { handleRequest } from "./utils";

export interface UserData {
  email: string;
  password: string;
}

export const login = async (userData: UserData) => {
  const response = await fetch(`/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleRequest(response);
};

export const getUserInfo = async () => {
  const response = await fetch(`/user/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleRequest(response);
};
