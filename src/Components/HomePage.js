import Button from "react-bootstrap/Button";
import Levels from "./Levels";
import TypeBox from "./TypeBox";
import Timer from "./Timer";

const HomePage = () => {
  return (
    <div className="content">
      
      
      {/* <div className="quote">
			Click on the area below to start the game.
			</div>
			<textarea className="input_area" placeholder="start typing here..."></textarea> */}
      <div>
        <TypeBox classname="input_area"></TypeBox>
      </div>
      {/* <Button className="restart_btn" variant="dark">
        Restart
      </Button> */}
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
