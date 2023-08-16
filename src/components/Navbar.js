import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useState, useEffect } from "react";
import Text from "./text/Text";
import userPhoto from "./user.jpg";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="app-name" href="/">
          <Text
            info={"App Name"}
            size={"h3"}
            weight={"bold"}
            lineheight={"extra"}
            color={"white"}
          />
        </Link>
        <div className="user-data">
          {screenSize < 768 ? (
            <Text
              info={"John"}
              size={"h5"}
              weight={"regular"}
              lineheight={"large"}
              color={"white"}
            />
          ) : (
            <Text
              info={"John"}
              size={"h4"}
              weight={"regular"}
              lineheight={"super"}
              color={"white"}
            />
          )}
          <img className="user-photo" src={userPhoto} alt="user"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
