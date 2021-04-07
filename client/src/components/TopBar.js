import _ from "lodash";
import React, { Component } from "react";
import { Container, Header, Icon, Menu, Visibility } from "semantic-ui-react";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  backgroundColor: "#5683A4",
};

const fixedMenuStyle = {
  backgroundColor: "#5683A4",
  border: "1px solid #ddd",
};

export default class TopBar extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width"),
      });
    }
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item header style={{ color: "#fff" }}>
                Room Name
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item>
                  <Icon name="search" style={{ color: "#FFF" }} />
                </Menu.Item>
                <Menu.Item>
                  <Icon name="ellipsis vertical" style={{ color: "#FFF" }} />
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}
