export interface User {
  name: string;
  avatar_url: string;
  isOnline?: boolean;
}

export interface GroupWindow {
  id: number;
  users: User[];
  name: string;
  last_message: {
    id: number;
    sender: User;
    content: string;
    created_at: string;
    image_url?: string;
  };
  messages?: Message[];
}

export interface Message {
  id: number;
  sender: User;
  content: string;
  created_at: string;
  image_url: string;
}

export interface User {
  id: number;
  name: string;
  avatar_url: string;
  email: string;
  bio: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface Group {
  id: number;
  name: string;
}

export interface MessageData {
  content: string;
  image?: File;
}
