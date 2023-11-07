import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const IP = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
    socket.on("nodeStatus", ({ id, status, ip, label }) => {
      setData((prevData) => ({
        ...prevData,
        [id]: { id, label, status, ip },
      }));
    });
  }, []);

  return <div></div>;
};

export default IP;
