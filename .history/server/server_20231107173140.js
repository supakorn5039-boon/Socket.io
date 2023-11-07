const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");

const server = http.createServer(app);
const io = socketIO(server);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000/"],
  })
);

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
