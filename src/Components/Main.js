import Levels from "./Sections/Levels";
import TypeBox from "./TypeBox/TypeBoxExpert";
import TypeBoxBeginner from "./TypeBox/TypeBoxBeginner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
      <>
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
      </>
  );
};

export default Main;
