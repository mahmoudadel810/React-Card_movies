/** @format */

import React from "react";
import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand href="#home">Movie Cards</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
