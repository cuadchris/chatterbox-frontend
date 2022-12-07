import React, { useEffect, useRef, useState } from "react";
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
// import { useStateValue } from "../StateProvider";
import { useAuth0 } from "@auth0/auth0-react";

export const Chat = ({ messages }) => {
  const [randomInt, setRandomInt] = useState("");
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // const [{ user }, dispatch] = useStateValue();
  const { user } = useAuth0();

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: user.name,
      timestamp: new Date().toUTCString(),
      received: true,
    });
    setInput("");
  };

  useEffect(() => {
    setRandomInt(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/219/original/ct-logo.png"
        />
        <div className="chat_header_info">
          <h3>Capstone</h3>
          <p>Last message at {messages[messages.length - 1]?.timestamp}</p>
        </div>
        <div className="chat_header_right">
          {/* <SearchOutlined />
          <AttachFile />
          <MoreVert /> */}
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <div key={nanoid()}>
            <p
              className={`chat_message ${
                message.name === user.name && "chat_receiver"
              }`}
            >
              <span
                className={`chat_name ${
                  message.name === user.name && "dark_name"
                }`}
              >
                {message.name}
              </span>
              {message.message}
              <span className="chat_timestamp">{message.timestamp}</span>
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat_footer">
        <InsertEmoticon className="icon" />
        <form onSubmit={sendMessage}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message"
            type="text"
          />
          {/* <button onClick={sendMessage} type="submit">
            Send a message
          </button> */}
        </form>
        <MicIcon className="icon" />
      </div>
    </div>
  );
};
