import { Icon, Menu, Visibility } from "semantic-ui-react";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  backgroundColor: "#5683A4",
};

const TopBar = ({ name }) => {
  return (
    <div>
      <style>
        {`
          html, body {
            background: #E7EBF0;
          }
        `}
      </style>

      <Visibility once={false}>
        <Menu borderless fixed={undefined} style={menuStyle}>
          <Menu.Item header style={{ color: "#fff" }}>
            <Icon name="bars" />
          </Menu.Item>
          <Menu.Item header style={{ color: "#fff", marginRight: "6.5em" }}>
            Telegram
          </Menu.Item>
          <Menu.Item header style={{ color: "#fff" }}>
            {name}
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="search" style={{ color: "#FFF" }} />
            </Menu.Item>
            <Menu.Item>
              <Icon name="ellipsis vertical" style={{ color: "#FFF" }} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Visibility>
    </div>
  );
};

export default TopBar;
