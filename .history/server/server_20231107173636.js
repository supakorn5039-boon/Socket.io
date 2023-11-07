const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");
const io = socketIO(server);

app.use(cors());

const server = http.createServer(app);
io.on("connection", (socket) => {
  console.log("A User Connected", socket);
});

app.get("/", (req, res) => {
  console.log("Hello First");
  res.send("First");
});
app.get("/boon", (req, res) => {
  console.log("Hello Endpoint");
  res.send("Hello  DEV");
});

server.listen(3001, () => console.log("Server is Running on Port 3001"));
