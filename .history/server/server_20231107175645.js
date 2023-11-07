const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");

const ping = require("ping");

const nodeData = [
  { id: 1, label: "Switch 1", status: "up", ip: "192.168.2.60" },
  { id: 2, label: "Switch 2", status: "up", ip: "192.168.2.60" },
  { id: 3, label: "Switch 3", status: "up", ip: "192.168.2.60" },
  { id: 4, label: "Switch 4", status: "up", ip: "192.168.2.60" },
];

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

  socket.emit("m", "Nebula ");
});

server.listen(3001, () => console.log("Server is Running on Port 3001"));
