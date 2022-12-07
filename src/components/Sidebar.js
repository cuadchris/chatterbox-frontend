import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { SidebarChat } from "./SidebarChat";
import { useStateValue } from "../StateProvider";

export const Sidebar = ({messages}) => {

  const [{user}, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_header_right">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchOutlined />
          <input placeholder="Search or begin new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat messages={messages} />
      </div>
    </div>
  );
};
