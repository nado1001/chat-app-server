type User = {
  name: string;
  socketId: string;
}
type Log = {
  logId: number;
  userName: string;
  time: string;
  message: string;
}
type Room = {
  id: string;
  name: string;
  users: User[];
  logs: Log[];
}

const rooms: Room[] = [
  {
    id: 'DEFAULT_ROOM', name: '雑談',
    users: [],
    logs: [] 
  }
];

export type {
  User,
  Log,
  Room
};

export default rooms;