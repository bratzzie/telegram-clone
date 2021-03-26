import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1>Sign in</h1>
      <p>Please choose your country and enter your full phone number.</p>
      <br />
      <p>
        Note that you need an existing account to log in to Telegram Web. To
        sign up for Telegram, use one of our mobile apps.
      </p>
      <h2>Country</h2>
      <p>The Whole World!</p>
      <label htmlFor="name">Name</label>
      <input
        placeholder="John"
        name="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <label htmlFor="room">Room</label>
      <input
        name="room"
        placeholder="💌 Super Secret DO not come!!!"
        type="text"
        onChange={(event) => setRoom(event.target.value)}
        value={room}
      />
      <Link
        onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button>Next {">"} </button>
      </Link>
    </div>
  );
};

export default Join;
