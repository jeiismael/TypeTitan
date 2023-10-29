import React from "react";
import TypeBox from "./TypeBox";
import Levels from "./Levels";
import MiniLeaderBoards from "./MiniLeaderBoards";
import Login from "./Login";
import Footer from "./Footer"

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
