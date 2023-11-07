const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");
const io = socketIO(server);

app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => console.log("Server is Running on Port 3001"));
