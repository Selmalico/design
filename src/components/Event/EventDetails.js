import React from "react";
import "../styles/CardDetails.css";
import background from "../assets/event1.jpg";
import Text from "../text/Text";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faTicket,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EventDetails = () => {
  window.scrollTo(0, 0);
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
  const text =
    "Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. Est explicabo neque autmolestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis.";
  return (
    <div className="eventpage">
      <div className="page">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="overlay"></div>
          <div className="event-details">
            <Link className="back-button" to="/">
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: "#ffffff" }}
                className="arrow"
              />
            </Link>
          </div>
          <div className="title-container">
            <div className="event">
              <Text
                info={"Dave"}
                size={"h4"}
                weight={"bold"}
                lineheight={"super"}
                color={"white"}
              />
            </div>
            <div></div>
          </div>

          <div className="details">
            <div className="event-name">
              {screenSize < 768 ? (
                <Text
                  info={"Dave"}
                  size={"h3"}
                  weight={"bold"}
                  lineheight={"extra"}
                  color={"white"}
                />
              ) : (
                <Text
                  info={"Dave"}
                  size={"h1"}
                  weight={"bold"}
                  lineheight={"super-extra"}
                  color={"white"}
                />
              )}
            </div>
            <div className="price-tag">
              {screenSize < 768 ? (
                <Text
                  info={"$45.00"}
                  size={"h6"}
                  weight={"bold"}
                  lineheight={"tiny"}
                  color={"black"}
                />
              ) : (
                <Text
                  info={"$45.00"}
                  size={"h5"}
                  weight={"bold"}
                  lineheight={"tiny"}
                  color={"black"}
                />
              )}
            </div>
          </div>

          <div className="all-data">
            <div className="event-calendar">
              <div className="calendar-icon">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "#ffffff" }}
                  className="calendar"
                />
              </div>
              <div className="data-event">
                <div className="month">
                  <div className="event-date-day">
                    <Text
                      info={"02"}
                      size={"h5"}
                      weight={"bold"}
                      lineheight={"large"}
                      color={"white"}
                    />
                  </div>
                  <div className="event-date-month">
                    {screenSize < 768 ? (
                      <Text
                        info={"Septembre"}
                        size={"h6"}
                        weight={"regular"}
                        lineheight={"tiny"}
                        color={"white"}
                      />
                    ) : (
                      <Text
                        info={"Septembre"}
                        size={"h5"}
                        weight={"regular"}
                        lineheight={"large"}
                        color={"white"}
                      />
                    )}
                  </div>
                </div>
                <hr className="calendar-divider" />

                <div className="day-event">
                  <div className="time">
                    {screenSize < 768 ? (
                      <Text
                        info={"10:00PM"}
                        size={"h5"}
                        weight={"bold"}
                        lineheight={"large"}
                        color={"white"}
                      />
                    ) : (
                      <Text
                        info={"10:00PM"}
                        size={"h5"}
                        weight={"regular"}
                        lineheight={"large"}
                        color={"white"}
                      />
                    )}
                  </div>
                  <div className="weekday" style={{ color: "#CCCCCC" }}>
                    <Text
                      info={"Tuesday"}
                      size={"h6"}
                      weight={"regular"}
                      lineheight={"tiny"}
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="location-container">
              <div className="location-icon">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#ffffff" }}
                  className="location"
                />
              </div>
              <div className="location-info">
                <span className="location-place">
                  <Text
                    info={"Amsterdam, Netherlands"}
                    size={"h5"}
                    weight={"regular"}
                    lineheight={"large"}
                    color={"white"}
                  />
                </span>
              </div>
            </div>
            <div className="ticket-container">
              <div className="ticket">
                <FontAwesomeIcon icon={faTicket} className="ticket-icon" />
              </div>
              <div className="ticket-details">
                <span className="ticket-info">
                  <Text
                    info={"5 Tickets"}
                    size={"h5"}
                    weight={"regular"}
                    lineheight={"large"}
                    color={"white"}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="about-concert">
          <h1 className="about-title">
            {screenSize < 768 ? (
              <Text
                info={"About event"}
                size={"h5"}
                weight={"bold"}
                lineheight={"large"}
                color={"white"}
              />
            ) : (
              <Text
                info={"About event"}
                size={"h4"}
                weight={"bold"}
                lineheight={"super"}
                color={"white"}
              />
            )}
          </h1>
          <div className="about-button">
            <div className="about">
              <Text
                info={text}
                size={"h5"}
                weight={"regular"}
                lineheight={"large"}
                color={"white"}
              />
            </div>
            <button className="ticket-button">
              <div className="button-ticket-text">
                <FontAwesomeIcon icon={faTicket} style={{color: "white"}} className="ticket-icon-text" />
                <Text
                info={"Tickets"}
                size={"h5"}
                weight={"regular"}
                lineheight={"large"}
                color={"white"}
              />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
