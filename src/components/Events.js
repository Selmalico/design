import "./styles/Events.css";
import Text from "./text/Text";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Events = ({ title, place, price, day, month, background }) => {
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
    <Link to="/event" className="event-main">
    <div className="event-card-container">
    <div className="event-bg" style={{backgroundImage: `url(${background})`}}></div>

      <div className="event-date">
        <div className="day">{screenSize < 1000 ? (
            <Text
              info={`${day}`}
              size={"h6"}
              weight={"bold"}
              lineheight={"tiny"}
              color={"white"}
            />
          ) : (
            <Text
              info={`${day}`}
              size={"h5"}
              weight={"bold"}
              lineheight={"tiny"}
              color={"white"}
            />
          )} </div> <hr className="date-divider"/>
        <div className="month">{screenSize < 1000 ? (
            <Text
              info={`${month}`}
              size={"h6"}
              weight={"regular"}
              lineheight={"tiny"}
              color={"white"}
            />
          ) : (
            <Text
              info={`${month}`}
              size={"h5"}
              weight={"regular"}
              lineheight={"tiny"}
              color={"white"}
            />
          )}</div>
      </div>
      <div className="price-box">
        ${screenSize < 1000 ? (
            <Text
              info={`${price}`}
              size={"h6"}
              weight={"bold"}
              lineheight={"tiny"}

            />
          ) : (
            <Text
              info={`${price}`}
              size={"h5"}
              weight={"bold"}
              lineheight={"tiny"}
            />
          )}
      </div>

      <div className="info-box">
        <div className="info-text">
          <div style={{marginBottom:"8px"}}>
          {screenSize < 1000 ? (
            <Text
              info={`${title}`}
              size={"h4"}
              weight={"medium"}
              lineheight={"super"}
              color={"white"}
            />
          ) : (
            <Text
              info={`${title}`}
              size={"h3"}
              weight={"bold"}
              lineheight={"extra"}
              color={"white"}
            />
          )}
          </div>
          <div className="place">
            <Text
              info={`${place}`}
              size={"h5"}
              weight={"regular"}
              lineheight={"super"}
              color={"white"}
            />
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
    
};

export default Events;
