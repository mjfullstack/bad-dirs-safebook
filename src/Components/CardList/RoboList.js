// Parent of RoboButton.js
// Child of App
import React from 'react';
import RoboButton from '../Card/RoboButton'
import './RoboList.css'

const RoboList = ({ robots , shuffle}) => {
  // console.log("RoboList shuffle: ", shuffle);
  const cardArray = robots.map((user, idx) => {
    return ( <RoboButton
      key={robots[idx].id}
      id={robots[idx].id}
      name={robots[idx].name}
      username={robots[idx].username}
      email={robots[idx].email}
      beenclicked={robots[idx].beenclicked}
      shuffle={shuffle}/> )
  })
  return (
    <div className="container" id='myRoboList'> {/**  w-20 here makes whole list so small can't see it! **/}
      {cardArray}
    </div>
  )
};

export default RoboList;