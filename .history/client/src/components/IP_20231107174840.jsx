import React, { useEffect } from "react";
import io from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
  }, []);

  return <div>IP</div>;
};

export default IP;
