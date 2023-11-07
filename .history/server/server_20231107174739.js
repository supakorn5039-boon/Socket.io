const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: "http://localhost:3000",
  methods: ["get", "post"],
});

io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id} `);
  socket.on("disconnect", () => {
    console.log(`User Disconnected : ${socket.id} `);
  });
});

server.listen(3001, () => console.log("Server is Running on Port 3001"));
