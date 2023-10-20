import Button from "react-bootstrap/Button";
import Levels from "./Levels";
import TypeBox from "./TypeBox";

const HomePage = () => {
  return (
    <div className="content">
      <div className="boxes">
        <div className="wpm">
          <div className="header_text">WPM</div>
          <div className="curr_wpm"></div>
        </div>
        <div className="cpm">
          <div className="header_text">CPM</div>
          <div className="curr_cpm"></div>
        </div>
        <div className="errors">
          <div className="header_text">Errors</div>
          <div className="curr_errors"></div>
        </div>
        <div className="timer">
          <div className="header_text">Time</div>
          <div className="curr_time"></div>
        </div>
        <div className="accuracy">
          <div className="header_text">% Accuracy</div>
          <div className="curr_accuracy"></div>
        </div>
      </div>
      {/* <div className="quote">
			Click on the area below to start the game.
			</div>
			<textarea className="input_area" placeholder="start typing here..."></textarea> */}
      <div>
        <TypeBox classname="input_area"></TypeBox>
      </div>
      <Button className="restart_btn" variant="dark">
        Restart
      </Button>
      <Levels></Levels>
    </div>

    // <>
    //   <div class="parent">
    //     <div class="beginner">
    //       <div className="mb-2">
    //         <Levels></Levels>
    //       </div>
    //     </div>
    //     <div class="expert">
    //       <div className="mb-2">
    //         <Button variant="primary" size="lg">
    //           Expert
    //         </Button>
    //       </div>
    //     </div>
    //     <div class="intermediate">
    //       <div className="mb-2">
    //         <Button variant="primary" size="lg">
    //           Intermediate
    //         </Button>
    //       </div>
    //     </div>
    //     <div class="leadsmall">
    //       <div className="mb-2">
    //         <Button variant="primary" size="lg">
    //           Large button
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default HomePage;
