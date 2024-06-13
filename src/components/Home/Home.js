import React, { useState, useEffect } from "react";
import Search from "./Searchbar";
import "../styles/Home.css";
import backgroundimg from "../assets/concert-crowd-filming-with-smartphone-000078536871-full-e0930ab7.jpg";
import Cards from "./Cards";
import Tags from "./Tags";
import Text from "../text/Text";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import Events from "../Event/Events";
import Navbar from "./Navbar";

const Home = () => {
  const tagOptions = ["All", "Free", "Limited", "Concert", "Festival"];
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Filtroni eventet në bazë të kërkimit dhe tagoptions të zgjedhur
  useEffect(() => {
    const filtered = events.filter(event => {
      const titleMatches = event.title.toLowerCase().includes(query.toLowerCase());
      const tagMatches = selectedTag === "All" || event.tags.includes(selectedTag);
      return titleMatches && tagMatches;
    });
    setFilteredEvents(filtered);
  }, [query, selectedTag]); // Shto selectedTag si dependency këtu

  // Lista e eventeve, mund të përputhet me të dhënat reale të eventeve nga një burim të jashtëm
  const events = [
    { title: "Dave - We're all alone in this together UK tour 2022", tags: ["Concert"] },
    { title: "Coldplay - Amsterdam Concert 2022", tags: ["Concert", "Limited"] },
    { title: "Festival of Lights 2022", tags: ["Festival", "Free"] },
  ];

  return (
    <div className="homepage">
      <Navbar />
      <hr className="line" />
      <Search className="search-home" onChange={(value) => setQuery(value)} />
      <div className="suggested">
        <Text
          info={"Suggested"}
          size={screenSize > 768 ? "h3" : "h4"}
          weight={"semibold"}
          lineheight={screenSize > 768 ? "extra" : "super"}
          color={"white"}
        />
      </div>
      <div className="cards">
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={backgroundimg}
        />
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={backgroundimg}
        />
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={backgroundimg}
        />
      </div>
      <div className="upcoming">
        <Text
          info={"Upcoming events"}
          size={screenSize > 768 ? "h3" : "h4"}
          weight={"semibold"}
          lineheight={screenSize > 768 ? "extra" : "super"}
          color={"white"}
        />
      </div>
      <div className="tags-container">
        <Tags options={tagOptions} onChange={(tag) => setSelectedTag(tag)} />
      </div>
      <div className="total-events">
        <Text info={"Total events: 150"} size={"h6"} weight={"normal"} lineheight={"medium"} color={"gray"} />
      </div>
      <div className="events-home">
        {/* Përdor filteredEvents në vend të hardkoduar events */}
        {filteredEvents.map((event, index) => (
          <Events
            key={index}
            title={event.title}
            place="Amsterdam, Netherlands - 10:00 PM"
            price="45.00"
            day="02"
            month="Sep"
            background={event1}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
