import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./components/reducer";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <Auth0Provider
      domain="dev-uahyppq7qud11aw8.us.auth0.com"
      clientId="hBRprAYQucY75NGhAJlnXsu5FqCA8VUk"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    {/* </StateProvider> */}
  </React.StrictMode>
);
