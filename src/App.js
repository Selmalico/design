import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import EventDetails from "./components/Event/EventDetails";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<EventDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
