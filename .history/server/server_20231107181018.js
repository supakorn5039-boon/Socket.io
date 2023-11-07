const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");

const ping = require("ping");

const nodeData = [
  { id: 1, label: "MacbookPro ", status: "Up", ip: "192.168.2.60" },
  { id: 2, label: "IpadPro ", status: "Up", ip: "192.168.2.156" },
  { id: 3, label: "Iphone 13Pro ", status: "Up", ip: "192.168.2.193" },
  { id: 4, label: "ASUS Tuf", status: "Up", ip: "192.168.2.1" },
];

function pingAndUpdate() {
  Object.values(nodeData).forEach((node) => {
    ping.sys.probe(node.ip, (isAlive) => {
      const UpdatedStatus = isAlive ? "Up" : "Down";

      io.emit("nodeStatus", {
        id: node.id,
        status: UpdatedStatus,
        ip: node.ip,
        label: node.label,
      });
    });
  });
}

pingAndUpdate();
setInterval(pingAndUpdate, 60000);

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: "http://localhost:3000",
  methods: ["get", "post"],
});

// io.on("connection", (socket) => {
//   console.log(`User Connected : ${socket.id} `);
//   socket.on("disconnect", () => {
//     console.log(`User Disconnected : ${socket.id} `);
//   });

//   socket.emit("m", "Nebula ");
// });

server.listen(3001, () => console.log("Server is Running on Port 3001"));
