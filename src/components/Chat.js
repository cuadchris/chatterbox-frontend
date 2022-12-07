import React, { useEffect, useState } from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Chat.css";

export const Chat = () => {
  const [randomInt, setRandomInt] = useState("");

  useEffect(() => {
    setRandomInt(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/b${randomInt}.svg`}
        />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_header_right">
          <SearchOutlined />
          <AttachFile />
          <MoreVert />
        </div>
      </div>
      <div className="chat_body"></div>
      <div className="chat_footer"></div>
    </div>
  );
};
