import React from "react";
import TypeBox from "./TypeBox/TypeBoxExpert";
import Levels from "./Sections/Levels";
import MiniLeaderBoards from "./Leaderboards/MiniLeaderBoards";
import Login from "./Sections/Login";
import Footer from "./Sections/Footer"

const Home = () => {
  return (
    <>
      <div className="home">
        <div class="parent">
          <div class="div1">
            <TypeBox />
          </div>
          <div class="div2"> 
            <Levels />
          </div>
          <div class="div3"> 
            <Login />
          </div>
          <div class="div4"> 
          <MiniLeaderBoards />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
