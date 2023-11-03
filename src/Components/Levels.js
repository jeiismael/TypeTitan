import Figure from 'react-bootstrap/Figure';
import Beginner from './Beginner.png';
import Intermediate from './Intermediate.png';
import Expert from './Expert.png';
import Image from 'react-bootstrap/Image';


function Levels() {
  return (
    <div className='levels'>
      <Image className='levelimage' src={Beginner}/>
      <Image className='levelimage' src={Intermediate}/>
      <Image className='levelimage' src={Expert}/>
    </div>
  );
}

export default Levels;