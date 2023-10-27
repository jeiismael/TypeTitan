import Figure from 'react-bootstrap/Figure';
import Beginner from './Beginner.png';
import Intermediate from './Intermediate.png';
import Expert from './Expert.png';
import Image from 'react-bootstrap/Image';

function Levels() {
  return (
    <div className='levels'>
      <a href="/beginner">
        <Image className='levelimage' src={Beginner} alt="Beginner Level" />
      </a>
      <a href="/intermediate">
        <Image className='levelimage' src={Intermediate} alt="Intermediate Level" />
      </a>
      <a href="/">
        <Image className='levelimage' src={Expert} alt="Expert Level" />
      </a>
    </div>
  );
}

export default Levels;
