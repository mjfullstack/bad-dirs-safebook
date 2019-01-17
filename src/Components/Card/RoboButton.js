// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is

// Function Way, NOT extend component way, CAN'T have functions inside
// const Card = (props) => {
// const RoboButton = ({ id, name, username, email, beenclicked, shuffle }) => {  
export default class RoboButton extends React.Component {

  onRoboBtnClick = (id, shuffle, getRoboID) => {
    console.log("onRoboBtnClick-id: ", id); // KNOWN!
    // console.log("this.state.robots[id].beenclicked: ", this.state.robots[id].beenclicked);
    // console.log("onRoboBtnClick-roboID: ", getRoboID(id));
    //shuffle(getRoboID(id)); // GETTING PASSED!!!
    shuffle(); // GETTING PASSED!!!
    return getRoboID(id);
  };
  
  
  render() { // EVERY class / extends needs a render()
    const {id, beenclicked, shuffle, getRoboID } = this.props;
    return ( 
      // return ONE component i.e. button
      <button  
        onClick={() => this.onRoboBtnClick(id, shuffle, getRoboID)} 
        className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20  card'>
      {/* <img onClick={() => this.onRoboBtnClick(id)} src={`https://robohash.org/${id}?size=150x150`} alt='RoboFoto'/> */}
        <img src={`https://robohash.org/${id}?size=150x150`} alt='RoboFoto'/>
        <div className="card-body tc">
          <p>id: {id}</p>
          <p>Clk'd: {beenclicked}</p>
          {/* <p className='tc'>Pick ME! </p> */}
          {/* <h5 className="card-title">{name}</h5> */}
          {/* <p>Username: {username}</p> Lorem ipsum*/}
          {/* <p>Username:</p> */}
          {/* <p>{username}</p> */}
          {/* <p>{name}</p> */}
          {/* <p className="tl">e-mail: {email}</p> */}
        </div>
      </button>
    )
  } 
}

