import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let iseSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    iseSentByCurrentUser = true;
  }
  return iseSentByCurrentUser ? (
    <div style={{ backgroundColor: "#fff", paddingBottom: 15 }}>
      <h4 style={{ fontWeight: 600, textTransform: "capitalize" }}>
        {trimmedName}
      </h4>
      <p>{ReactEmoji.emojify(text)}</p>
    </div>
  ) : (
    <div style={{ backgroundColor: "#fff", paddingBottom: 15 }}>
      <h4 style={{ fontWeight: 600, textTransform: "capitalize" }}>{user}</h4>
      <p>{ReactEmoji.emojify(text)}</p>
    </div>
  );
};

export default Message;
