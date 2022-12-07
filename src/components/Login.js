import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

export const Login = () => {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login_container">
        <img src="logo512.png" alt="icon" />
        <div className="login_text">
          <h1>ChatterBox</h1>
        </div>
        <Button onClick={signIn} variant="contained">
          Sign in using Google
        </Button>
      </div>
    </div>
  );
};
