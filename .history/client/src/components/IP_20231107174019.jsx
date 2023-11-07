import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const IP = () => {
  return <div></div>;
};

export default IP;
