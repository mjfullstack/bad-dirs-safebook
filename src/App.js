import React, { Component } from 'react';
import RoboList from './Components/CardList/RoboList';
import { robots } from './robots';
// eslint-disable-next-line
import RoboTitle from './Components/RoboTitle/RoboTitle';
// import Button from './Components/Button'
// import ShuffleBtn from './ShuffleBtn';
// import SearchBox from './Components/SearchBox/SearchBox';
// import Jumbotron from './Components/JumbotronClickMe/Jumbotron';
import FixedNavbar from './Components/FixedNavbar/FixedNavbar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
      cardClicked: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log("event.target.value: ", event.target.value);
  };



  roboID = (id) => {
    console.log("App.roboID.id: ", id);
    this.setState({ cardClicked: id }); // Does get set, doesn't console.log until NEXT button click
    console.log(this.state.robots, "Robots", id)
    return this.setState((pvSt) => {
      const newRobos = pvSt.robots.map(robot => {
        if (robot.id === id) {
          return { ...robot, beenclicked: id }
        } else {
          return robot
        }
      })
      return ({ robots: newRobos })
    }, () => {
      // this.state.robots[id].beenclicked = id; // DON'T SET IT DIRECTLY
      //this.setState({this.state.robots[id].beenclicked: id}); // Does get set, doesn't console.log until NEXT button click
      // console.log("App.roboID.this.state.cardClicked: ", this.state.cardClicked); 
      console.log(
        "App.roboID.this.state.robots[id].beenclicked: ",
        this.state.robots.filter(robot => robot.id === id)[0].beenclicked
      )
      console.log(this.state.robots, "newly shuffled robots after clicking")
      return id;
    })

  };

  // this.setState(function(previousState){},callbackToExecuteAfterSetState)
  // this.setState({},callbackToExecuteAfterSetState)

  // shuffleArray = (roboID, array = this.state.robots.filter(robot => {
  //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  // }) ) => {
  shuffleArray = () => {
    let array = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    // let roboID = this.onRoboBtnClick.roboID;
    console.log("shuffleArray got called!");

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
    // console.log("filteredRobots: ", filteredRobots);

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
        <RoboList
          robots={filteredRobots}
          // shuffle={() => this.setState({ robots: this.shuffleArray(filteredRobots)})}
          shuffle={() => this.setState({ robots: this.shuffleArray() })}
          // shuffle={ this.setState({ robots: this.shuffleArray()})}
          getRoboID={this.roboID}
        >
        </RoboList>
        {/* </CardList> */}
      </div>
    )
  }
};

