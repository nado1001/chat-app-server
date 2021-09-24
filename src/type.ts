import { User, Log, Room } from './rooms';

interface ResultCommon {
  type: string;
} 

// チャットルーム作成
interface CreateRoom {
  roomName: string;
  userName: string;
}

// チャットルーム作成(結果)
interface CreateRoomResult extends ResultCommon {
  rooms: Room[]
}

// チャットルームに参加
interface JoinRoom {
  roomId: string;
  userName: string;
}

// チャットルームに参加(結果)
interface JoinRoomResult extends ResultCommon {
  roomId: string;
  userName: string;
  users: User[]
}

// チャット
interface Conversation {
  roomId: string;
  userName: string;
  message: string;
}

// チャット(結果)
interface ConversationResult extends ResultCommon {
  roomId: string;
  userName: string;
  time: string;
  message: string;
}

// チャットルーム退室(結果)
interface DisconnectRoomResult extends ResultCommon {
  roomId: string;
  socketId: string;
}

// 現在のチャットルーム
interface CurrentRoom {
  roomId: string;
}

// 現在のチャットルーム(結果)
interface CurrentRoomResult extends ResultCommon {
  roomId: string;
  roomName: string;
  users: User[],
  logs: Log[]
}

export type {
  CreateRoom,
  CreateRoomResult,
  JoinRoom,
  JoinRoomResult,
  Conversation,
  ConversationResult,
  DisconnectRoomResult,
  CurrentRoom,
  CurrentRoomResult
};