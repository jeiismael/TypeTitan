
import React from "react";
import { Link } from "react-router-dom";
import Beginner from './../Images/beginner.png';
import Intermediate from './../Images/Intermediate.png';
import Expert from './../Images/Expert.png';
import Image from 'react-bootstrap/Image';

function Levels() {
  return (
    <div className='levels'>
      <br />
      <br />
      <br />
      <Link to="/beginner">
        <Image className='levelimage' src={Beginner} alt="Beginner Level" />
      </Link>
      <Link to="/intermediate"> 
        <Image className='levelimage' src={Intermediate} alt="Intermediate Level" />
      </Link>
      <Link to="/expert">
        <Image className='levelimage' src={Expert} alt="Expert Level" />
      </Link>
    </div>
  );
}

export default Levels;
