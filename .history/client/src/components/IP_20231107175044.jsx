import React, { useEffect } from "react";
import io from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
    socket.on("m", (data) => {
      console.log(data);
    });
  }, []);

  return <div>IP</div>;
};

export default IP;
