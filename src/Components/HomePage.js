import Levels from "./Levels";
import TypeBox from "./TypeBox";
import TypeBoxBeginner from "./TypeBoxBeginner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/beginner" element={<TypeBoxBeginner />} />
        </Routes>
        <Routes>
          <Route path="/intermediate" element={<TypeBox />} />
        </Routes>
        <Routes>
          <Route path="/" element={<TypeBox />} />
        </Routes>
      </Router>
      <Levels></Levels>
    </div>
  );
};

export default HomePage;
