import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
// import { signInWithPopup } from "firebase/auth";
import React from "react";
// import { auth, provider } from "../firebase";
// import { useStateValue } from "../StateProvider";
import "./Login.css";
// import { actionTypes } from "./reducer";

export const Login = () => {

  // const [{}, dispatch] = useStateValue()
  const { loginWithRedirect } = useAuth0()

  // const signIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: res.user
  //       })
  //     })
  //     .catch((err) => alert(err.message));
  // };

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
