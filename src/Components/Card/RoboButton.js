// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is




// Function Way, NOT extend component way
// const Card = (props) => {
// const RoboButton = ({ id, name, username, email, beenclicked, shuffle }) => {  
  const RoboButton = (props) => {  
  // const { id, name, username, email, beenclicked, shuffle } = props;
  const { id,  beenclicked, shuffle } = props;


  //  onRoboBtnClick (event) => {
  //   console.log("event: ", event);
  //   const { name, shuffle, id } = event;
  //   console.log("name: ", name, "; shuffle: ", shuffle, "; id: ", id);
  // };
  

  return ( // return ONE component i.e. button
    <button onClick={shuffle} className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20 card'> 
      <img src={`https://robohash.org/${id}?size=150x150`} alt='RoboFoto'/>
      <div className="card-body tc">
        <p className='tc'>Pick ME! {beenclicked}</p>
        {/* <h5 className="card-title">{name}</h5> */}
        {/* <p>Username: {username}</p> Lorem ipsum*/}
        {/* <p>Username:</p> */}
        {/* <p>{username}</p> */}
        <p>id: {id}</p>
        {/* <p>clk: {beenclicked}</p> */}
        {/* <p className="tl">e-mail: {email}</p> */}
       </div>
    </button>
  )
}

export default RoboButton;