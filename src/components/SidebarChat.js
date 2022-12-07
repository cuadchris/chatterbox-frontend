import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

export const SidebarChat = ({messages}) => {
  //Generates a random avatar just for testing.  
  const [randomInt, setRandomInt] = useState("");

  useEffect(() => {
    setRandomInt(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/219/original/ct-logo.png" />
      <div className="sidebarChat_info">
        <h2>Capstone</h2>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
    </div>
  );
};
