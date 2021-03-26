const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./usersReducer");
const router = require("./router");

//⚙️ SERVER Configuration
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(router);

//⚙️ SOCKETS Configuration
io.on("connection", (socket) => {
  console.log("We have a connection via sockets!");

  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    // welcome from the admin
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!🎊` });
    socket.join(user.room);

    callback();
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
