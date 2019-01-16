import React, { Component } from 'react';
// import CardList from './Components/CardList/CardList';
import RoboList from './Components/CardList/RoboList';
import { robots } from './robots';
  // eslint-disable-next-line
import RoboTitle from './Components/RoboTitle/RoboTitle';
// import Button from './Components/Button'
// import ShuffleBtn from './ShuffleBtn';
// import SearchBox from './Components/SearchBox/SearchBox';
// import Jumbotron from './Componentsn/JumbotronClickMe/Jumbotron';
import FixedNavbar from './Components/FixedNavbar/FixedNavbar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
      cardClicked: 0
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    console.log("event.target.value: ", event.target.value);
  };

  shuffleArray = (array, roboID) => {
    console.log("shuffleArray got called!");
    console.log(`RoboButton roboID: `, roboID);

    // console.log("array: ", array);
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log("SHUFFLED array: ", array);
    return array;
  };


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log("filteredRobots: ", filteredRobots);
    return (
      <div className='tc'> {/** tc = tachyon text-align: center;  **/}
        <FixedNavbar />
        {/* <RoboTitle /> */}
        {/* <SearchBox searchChange={this.onSearchChange}/> */}
        {/* <ShuffleBtn shuffleArray={this.shuffleArray(this.state.robots)}/> */}

{/* 
         <Button // This Button is a GOOD reference Button
           // onClick={() => this.shuffleArray(this.state.robots)}
           onClick={() => this.setState({ robots: this.shuffleArray(filteredRobots)})}
           type="primary" // these elements are passed down through
           className="input-lg" // Deconsructed props - See Button/index.js
         >
           Shuffle Again!
         </Button>
 */}

        {/* <CardList robots={this.state.robots}/> */}
        {/* <CardList robots={filteredRobots} > */}
        <RoboList robots={filteredRobots} 
          shuffle={() => this.setState({ robots: this.shuffleArray(filteredRobots)})}
          // shuffle={ event => this.setState({ beenclicked: this.onRoboBtnClick()})}
        >
        </RoboList>
        {/* </CardList> */}
      </div>
    )
  }
};

export default App;
