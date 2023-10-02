import Figure from 'react-bootstrap/Figure';
import Beginner from './Beginner.png';
import Intermediate from './Intermediate.png';
import Expert from './Expert.png';
import Image from 'react-bootstrap/Image';


function Levels() {
  return (
    <>
    <Image src={Beginner}/>;
    <Image src={Intermediate}/>;
    <Image src={Expert}/>;
    {/* <Figure>
    <Figure.Image
      width={400}
      height={50}
      src={Beginner}
    />
    
  </Figure>
  <Figure>
    <Figure.Image
      width={400}
      height={50}
       src={Intermediate}
    />
    
  </Figure>
  <Figure>
    <Figure.Image
      width={400}
      height={50}      
      src={Expert}
    />
    
  </Figure> */}
  </>
  );
}

export default Levels;