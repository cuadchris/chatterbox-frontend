import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";

export const SidebarChat = ({ messages }) => {
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
