import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => alert(err.message));
  };

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
        <Button onClick={signIn} variant="contained">
          Sign in using Google
        </Button>
      </div>
    </div>
  );
};
