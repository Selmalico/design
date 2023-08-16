import "./styles/Card.css";
import Text from "./text/Text";
const Cards = ({ title, date, background }) => {
  return (
    <div
      className="card card-bg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="layout"></div>
      <div className="text">
        <div className="card-date">
          <Text
            info={`${date}`}
            size={"h6"}
            weight={"regular"}
            lineheight={"medium"}
            color={"white"}
          />
        </div>
        <div className="card-title">
          <Text info={`${title}`} size={"h4"} weight={"bold"} lineheight={"super"} color={"white"} />
        </div>
      </div>
      <button className="card-button"><Text info={"Tickets"} size={"h5"} weight={"regular"} lineheight={"large"} color={"white"} /></button>
    </div>
  )
};

export default Cards;
