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
