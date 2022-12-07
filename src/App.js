import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import axios from "./components/axios";
import { Login } from "./components/Login";
import { useStateValue } from "./StateProvider";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [messages, setMessages] = useState([]);
  // const [{user}, dispatch] = useStateValue()
  const { user, isAuthenticated } = useAuth0()
  // const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("0b050d35b8ed03689cee", {
      cluster: "us2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  console.log(user)

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
