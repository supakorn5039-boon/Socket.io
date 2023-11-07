import React, { useEffect } from "react";
import io from "socket.io-client";
import IP from "../../../.history/client/src/components/IP_20231107172132";

const IP = () => {
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
  }, []);

  return <div>IP</div>;
};

export default IP;
