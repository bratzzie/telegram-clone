import { Icon, Input } from "semantic-ui-react";

const InputComponent = ({ message, setMessage, sendMessage }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0px 200px",
        position: "sticky",
        bottom: 50,
      }}
    >
      <div>
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
          iconPosition="right"
          placeholder="Write a message..."
          style={{ width: "100%" }}
        >
          <Icon name="smile outline" style={{ cursor: "pointer" }} />
          <input />
        </Input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "baseline",
          paddingTop: 15,
        }}
      >
        <Icon name="file" style={{ color: "#B5B5B5", cursor: "pointer" }} />
        <Icon name="camera" style={{ color: "#B5B5B5", cursor: "pointer" }} />
        <Icon
          name="microphone"
          style={{ color: "#B5B5B5", cursor: "pointer" }}
        />
        <div style={{ cursor: "pointer" }}>{"😙"}</div>
        <div style={{ cursor: "pointer" }}>{"🙂"}</div>
        <div style={{ cursor: "pointer" }}>{"😆"}</div>
        <div style={{ cursor: "pointer" }}>{"🌜"}</div>
        <div style={{ cursor: "pointer" }}>{"👺"}</div>
        <p
          style={{
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#499DD9",
            cursor: "pointer",
          }}
          onClick={() => sendMessage(message)}
        >
          Send
        </p>
      </div>
    </div>
  );
};

export default InputComponent;
