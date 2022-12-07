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
import axios from "./axios";
import { nanoid } from "nanoid";

export const Chat = ({ messages }) => {
  const [randomInt, setRandomInt] = useState("");
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "Chris",
      timestamp: new Date().toUTCString(),
      received: true,
    });
    setInput("");
  };

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
          <div key={nanoid()}>
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
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon className="icon" />
      </div>
    </div>
  );
};
