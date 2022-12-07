import React from "react";
import "./Sidebar.css";
// import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { SidebarChat } from "./SidebarChat";
// import { useStateValue } from "../StateProvider";
import { useAuth0 } from "@auth0/auth0-react";

export const Sidebar = ({ messages }) => {
  // const [{user}, dispatch] = useStateValue()
  const { user, logout } = useAuth0();

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.picture} />
        <div className="sidebar_header_right">
          <IconButton onClick={() => logout({ returnTo: window.location.origin })}>
            <LogoutIcon />
          </IconButton>
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
