import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import NavBar from "./NavBar";
import Messages from "./Messages";
import TopBar from "../components/TopBar";
import { Container } from "semantic-ui-react";
import InputComponent from "./InputComponent";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    //When person leaves our chat
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }

    console.log(message, messages);
  };

  return (
    <Container
      style={{
        backgroundColor: "#fff",
        border: "1px solid #DEDEDF",
        borderRadius: 5,
        margin: "1rem 0",
        height: "95.5vh",
        boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)",
        overflow: "hidden",
      }}
    >
      <TopBar name={room} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />

        <Container style={{ minHeight: "100vh" }}>
          <Messages messages={messages} name={name} />
          <InputComponent
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Container>
      </div>
    </Container>
  );
};

export default Chat;
