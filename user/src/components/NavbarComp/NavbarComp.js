import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";
import logo from "./Logo_CTF-removebg-preview_upscaled.png";

const NavbarComp = ({id}) => {
  //const [points, setPoints] = useState(0);

  // const setscore = async () => {
  //   if (!id) return; // Check if id is undefined or null
  //   const res = await fetch(`http://localhost:3000/getspecificuser/${id}`);
  //   const data = await res.json();
  //   // setPoints(data.score);
  // };

  useEffect(() => {
    setscore();
  }, [id]); // Run setscore when id prop changes

  return (
    <>
      {/* First Navbar */}
      <Navbar bg="black" variant="dark" id="nav1">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        ></link>
        <Container>
         
          <Navbar.Brand href="/progress">ScoreBoard</Navbar.Brand>
        </Container>
      </Navbar>
      {/* Second Navbar */}
      <Navbar variant="dark" className="py-1 custom-navbar" id="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", padding: "0" }}
          >
            <img
              src={logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="CTF Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand
            href="#home"
            className="text-center"
            style={{ fontSize: "38px", fontWeight: "bold", margin: "0 auto" }}
          >
            Challenges
          </Navbar.Brand>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Navbar.Brand style={{ fontWeight: "bold" }}>Points:{points}</Navbar.Brand> */}
            {/* <Badge bg="none"> {points}</Badge> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
