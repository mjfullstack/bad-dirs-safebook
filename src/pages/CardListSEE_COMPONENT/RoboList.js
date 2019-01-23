// Parent of RoboButton.js
// Child of App
import React from 'react';
import RoboButton from '../../Components/Card/RoboButton';
import './RoboList.css';
// import { robots } from './robots';


const RoboList = ({ robots , shuffle, getRoboID}) => {
  // console.log("RoboList shuffle: ", shuffle);
  const cardArray = robots.map((robot) => {
    return ( <RoboButton
      key={robot.id}
      id={robot.id}
      name={robot.name}
      username={robot.username}
      email={robot.email}
      beenclicked={robot.beenClicked}
      shuffle={shuffle}
      getRoboID={getRoboID}/> )
  })
  return (
    <div id='myRoboList'> {/**  w-20 here makes whole list so small can't see it! **/}
      {cardArray}
    </div>
  )
};

export default RoboList;