import "./styles/Tags.css";
import { useState } from "react";
import Text from "./text/Text";
const Tags = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="buttons">
      {options.map((option, index) => (
        <button
          key={index}
          className={`AllButton ${
            selectedOption === option ? "selected" : "tags"
          }`}
          onClick={() => handleOptionClick(option)}
        >
            <Text
              info={`${option}`}
              size={"h5"}
              weight={"medium"}
              lineheight={"large"}
            />
        </button>
      ))}
    </div>
  );
};

export default Tags;
