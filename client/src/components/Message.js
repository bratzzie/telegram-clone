import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let iseSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    iseSentByCurrentUser = true;
  }
  return iseSentByCurrentUser ? (
    <div style={{ backgroundColor: "blue" }}>
      <p>{trimmedName}</p>
      <p>{ReactEmoji.emojify(text)}</p>
    </div>
  ) : (
    <div style={{ backgroundColor: "#fff" }}>
      <p>{user}</p>
      <p>{ReactEmoji.emojify(text)}</p>
    </div>
  );
};

export default Message;

/*
  <Message
      style={{
        backgroundColor: "#FFF",
        border: "transparent",
        outline: "transparent",
      }}
    >
      <MessageHeader>
        <p>{trimmedName}</p>
      </MessageHeader>
      <p>{ReactEmoji.emojify(text)}</p>
    </Message>
  ) : (
    <Message
      style={{
        backgroundColor: "#FFF",
        border: "transparent",
        outline: "transparent",
      }}
    >
      <MessageHeader>
        <p>{user}</p>
      </MessageHeader>
      <p>{ReactEmoji.emojify(text)}</p>
    </Message> */
