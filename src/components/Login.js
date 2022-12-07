import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/messages_512.png"
          alt="icon"
        />
        <div className="login_text">
          <h1>ChatterBox</h1>
        </div>
        <Button onClick={() => loginWithRedirect()} variant="contained">
          Sign in using Google
        </Button>
      </div>
    </div>
  );
};
