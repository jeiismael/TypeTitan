import Button from "react-bootstrap/Button";
import Levels from './Levels';

const HomePage = () => {
  return (
    <div class="content">
	<div class="heading">
	Type Titan
	</div>
	<div class="header">
	<div class="wpm">
		<div class="header_text">WPM</div>
		<div class="curr_wpm">100</div>
	</div>
	<div class="cpm">
		<div class="header_text">CPM</div>
		<div class="curr_cpm">100</div>
	</div>
	<div class="errors">
		<div class="header_text">Errors</div>
		<div class="curr_errors"></div>
	</div>
	<div class="timer">
		<div class="header_text">Time</div>
		<div class="curr_time"></div>
	</div>
	<div class="accuracy">
		<div class="header_text">% Accuracy</div>
		<div class="curr_accuracy"></div>
	</div>
	</div>

	<div class="quote">
	Click on the area below to start the game.
	</div>
	<textarea class="input_area"
	placeholder="start typing here..."
	oninput="processCurrentText()"
	onfocus="startGame()">
	</textarea>
	<button class="restart_btn"
	onclick="resetValues()">
	Restart
	</button>
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
