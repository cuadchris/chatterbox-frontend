import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import axios from "./components/axios";

function App() {
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
