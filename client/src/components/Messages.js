import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Container } from "semantic-ui-react";
import Message from "./Message";

const Messages = ({ messages, name }) => (
  <Container text className="cont">
    <ScrollToBottom>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  </Container>
);

export default Messages;
