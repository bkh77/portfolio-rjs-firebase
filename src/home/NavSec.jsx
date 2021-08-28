import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

function NavSec() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("fixed");
  }

  return (
    <>
      <Navbar className={x.join(" ")} light expand="md">
        <Link to="/" className="navbar-brend">
          <b>BKh</b>Dev
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Setup</Link>
            </NavItem>
            <NavItem>
              <Link to="/">About me</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavSec;
