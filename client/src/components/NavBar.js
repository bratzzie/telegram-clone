import React from "react";
import { Icon, Input, Menu } from "semantic-ui-react";

const NavBar = () => (
  <Menu style={{ flexDirection: "column", height: "90vh" }}>
    <Menu.Item>
      <div>
        <Input iconPosition="left" placeholder="Search">
          <Icon name="search" />
          <input />
        </Input>
      </div>
    </Menu.Item>
  </Menu>
);

export default NavBar;
