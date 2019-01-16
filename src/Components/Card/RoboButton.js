// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is

// Function Way, NOT extend component way
// const Card = (props) => {
// const RoboButton = ({ id, name, username, email, beenclicked, shuffle }) => {  
  class RoboButton extends React.Component {  
    
    onRoboBtnClick = (id) => {
      // event.preventDefault();
      // const { name, shuffle, id } = event;
      this.setState({robots: [id].beenclicked = 1}); 
      // console.log("onRoboBtnClick-id: ", id, "; this.state.robots[id].beenclicked: ", this.state.robots[id].beenclicked);
      console.log("onRoboBtnClick-id: ", id);
      // console.log("state: ", this.state);
    };
    
    // console.log("beenclicked: ", beenclicked);
    render(){
      const { id, beenclicked } = this.props;
      // console.log("RoboButton-render: name: ", name,  "; beenclicked: ", beenclicked, "; id: ", id);
      // console.log("RoboButton-render: id: ", id);
      // this.setState({robots: [id].beenclicked = 1}) // component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
      return(
        // return ONE component i.e. button
        // const { id,  beenclicked, shuffle } = props;
        // <button onClick={shuffle} className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20  card'> 
        <button onClick={() => this.onRoboBtnClick({id})} className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20  card'> 
        <img onClick={() => this.onRoboBtnClick(id)} src={`https://robohash.org/${id}?size=150x150`} alt='RoboFoto'/>
        <div className="card-body tc">
          {/* <p className='tc'>Pick ME! </p> */}
          {/* <h5 className="card-title">{name}</h5> */}
          {/* <p>Username: {username}</p> Lorem ipsum*/}
          {/* <p>Username:</p> */}
          {/* <p>{username}</p> */}
          <p>id: {id}</p>
          <p>Clk'd: {beenclicked}</p>
          {/* <p className="tl">e-mail: {email}</p> */}
        </div>
      </button>
    )
  } 
}

export default RoboButton;