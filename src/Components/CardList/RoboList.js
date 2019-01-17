// Parent of RoboButton.js
// Child of App
import React from 'react';
import RoboButton from '../Card/RoboButton'
import './RoboList.css'

const RoboList = ({ robots , shuffle, getRoboID}) => {
  const cardArray = robots.map((robot, idx) => {
    return ( <RoboButton
      key={robot.id}
      id={robot.id}
      name={robot.name}
      username={robot.username}
      email={robot.email}
      beenclicked={robot.beenclicked}
      shuffle={shuffle}
      getRoboID={getRoboID}/>
    )
  })
  return (
    <div className="container" id='myRoboList'> {/**  w-20 here makes whole list so small can't see it! **/}
      {cardArray}
    </div>
  )
};

export default RoboList;