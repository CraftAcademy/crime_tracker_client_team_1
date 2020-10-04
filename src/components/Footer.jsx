import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <Segment inverted>
        <Header size="small" id="footer">
          <p id="made-by">
            Made by Sara Lundkvist | Mauro Avellaneda | Sebastian Niewiadomski |
            John Chimbani 2020{" "}
          </p>{" "}
          #CraftAcademy
        </Header>
      </Segment>
    </>
  );
};
export default Footer;
