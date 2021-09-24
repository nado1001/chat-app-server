import express from "express";
import { Server } from "socket.io";
import http from "http";

// https://stackoverflow.com/questions/66186023/socket-io-typescript-fails-to-create-a-server-this-expression-is-not-callable
const app: express.Express = express()
const server: http.Server = http.createServer(app);
const io = new Server(server);

io.on('connection', () => { /* … */ });

server.listen(process.env.port || 3333, () => {
  console.log(`App running on port ${process.env.port || 3333}`);
});