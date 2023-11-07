import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const IP = () => {
  return (
    <div>
      <input placeholder="Message" />
      <button onClick={sendMessage}>Send a Message</button>
    </div>
  );
};

export default IP;
