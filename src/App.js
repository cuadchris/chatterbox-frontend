import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher("0b050d35b8ed03689cee", {
      cluster: "us2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages]);

  console.log(messages)

  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
