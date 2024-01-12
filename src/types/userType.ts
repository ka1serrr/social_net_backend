import { Chat } from "./chatType";

export type User = {
  id: number;
  password: string;
  email: string;
  avatar?: string;
  username: string;
  messages: string[];
  chats: Chat[];
};
