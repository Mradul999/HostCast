import { Server, Socket } from "socket.io";

const io = new Server(8000, {
  cors: true,
});

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);
});
