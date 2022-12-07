import React, { useEffect, useState } from "react";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";

export const Chat = ({ messages }) => {
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
      <div className="chat_body">
        {messages.map((message) => (
          <div key={message._id}>
            <p
              className={`chat_message ${message.received && "chat_receiver"}`}
            >
              <span className="chat_name">{message.name}</span>
              {message.message}
              <span className="chat_timestamp">{message.timestamp}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon className="icon" />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon className="icon" />
      </div>
    </div>
  );
};
