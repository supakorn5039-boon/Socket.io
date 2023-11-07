import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const IP = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
    socket.on("m", (data) => {
      setData(data);
    });
  }, []);

  return <div>{data}</div>;
};

export default IP;
