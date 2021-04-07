import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            backgroundColor: "#5683A4",
            padding: 10,
          }}
        >
          <Header as="h2" style={{ color: "#fff" }} textAlign="center">
            <Image src="/logo.png" />
            Telegram
          </Header>
          <Header
            as={Link}
            style={{ color: "#fff" }}
            textAlign="center"
            to={`/chat?name=${name}&room=${room}`}
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            Next {">"}
          </Header>
        </div>

        <Form size="large">
          <Segment stacked>
            <h2 style={{ textAlign: "left", fontWeight: 800 }}>Sign In</h2>
            <p style={{ textAlign: "left", color: "gray", fontWeight: 500 }}>
              Please choose your name and enter your full room name.
            </p>
            <Form.Input
              fluid
              placeholder="Natasha"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Input
              fluid
              placeholder="JS is the best!!!"
              type="text"
              name="room"
              value={room}
              onChange={(event) => setRoom(event.target.value)}
            />
            <Message>
              Welcome to the Telegram clone web-client. <br />
              <Link to="/">Learn more</Link>
            </Message>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    //   <div>
    //     <h1></h1>
    //     <p></p>
    //     <br />
    //     <p>
    //       Note that you need an existing account to log in to Telegram Web. To
    //       sign up for Telegram, use one of our mobile apps.
    //     </p>
    //     <h2>Country</h2>
    //     <p>The Whole World!</p>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       placeholder="John"
    //       name="name"
    //       type="text"
    //       onChange={(event) => setName(event.target.value)}
    //       value={name}
    //     />
    //     <label htmlFor="room">Room</label>
    //     <input
    //       name="room"
    //       placeholder="💌 Super Secret DO not come!!!"
    //       type="text"
    //       onChange={(event) => setRoom(event.target.value)}
    //       value={room}
    //     />
    //     <Link
    //       onClick={(event) => (!name || !room ? event.preventDefault() : null)}
    //       to={`/chat?name=${name}&room=${room}`}
    //     >
    //       <button>Next {">"} </button>
    //     </Link>
    //   </div>
  );
};

export default Join;
