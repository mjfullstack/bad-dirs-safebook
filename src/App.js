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
      cardClicked: '',
      currentScore: 0,
      highScore: 0,
      wonDisplayed: false
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log("event.target.value: ", event.target.value);
  };

  // Clears all the beenclicked's
  clearAllClicks =() => {
    this.setState((pvSt) => {
      const updatedRobos = pvSt.robots.map( (robot) => {
        return { ...robot, beenclicked: 0}
      })
      // console.log("Updated Robos: ", updatedRobos);
      return ({robots: updatedRobos})
    },
    () => {    
      // console.log("AFTER CLEARING, Let's look at robots.beenlicked...");
      // this.state.robots.map((robot) => {
      //   return console.log(`robot.id: ${robot.id}; robot.beenclicked ${robot.beenclicked}`);
      // })
    });
  }


  roboID = (id) => {
    console.log("App.roboID.id: ", id);
    this.setState({ cardClicked: id }); // Does get set
    // console.log("roboID - Robots: ", this.state.robots,  id)
    
    // Determine scoring for this click...
    // if beenclicked=0, inc currentScore
    //    if currentScore > highScore, highScore = currentScore
    // else if beenclicked !=0, 
    //    gameOver, 
    //    shake card for 1 sec, 
    //    restart game via currentScore=0, 
    //    keep the highScore
    // display / console.log scores
    // clear all beenclicked's
    // start new game because cards were shuffled prior to this call 
    // console.log("this.state.robots.filter(robot => robot.id === id)[0].beenclicked: ", this.state.robots.filter(robot => robot.id === id)[0].beenclicked);
    if (this.state.robots.filter(robot => robot.id === id)[0].beenclicked === 0) {
      this.setState({currentScore: this.state.currentScore + 1});
      // console.log(`Just set Current Score: ${this.state.currentScore}`)
      if ((this.state.currentScore + 1) > this.state.highScore) {
        this.setState({highScore: this.state.currentScore + 1});
        // console.log(`Just set High Score: ${this.state.highScore}`)
      }
      if ((this.state.currentScore + 1) >= this.state.robots.length) {
        console.log("YOU WON !!!");
        this.setState({wonDisplayed: true},
          () => {console.log(`this.state.wonDisplayed: ${this.state.wonDisplayed}.`)}
        );
        // eslint-disable-next-line
        let wonTimer = setTimeout(() =>
           this.setState({wonDisplayed: false, currentScore: 0},
            () => {
              console.log(`this.state.wonDisplayed: ${this.state.wonDisplayed}.`);
              // Update Score
              console.log(`Current Score: ${this.state.currentScore}; High Score: ${this.state.highScore}`);
              // Now clear all the beenclicked's
              this.clearAllClicks();
            }), 2000);
      };
      return this.setState((pvSt) => {
        const newRobos = pvSt.robots.map(robot => {
          if (robot.id === id) {
            return { ...robot, beenclicked: id }
          } else {
            return robot
          }
        })
        return ({ robots: newRobos })
      },
    () => {
      // this.state.robots[id].beenclicked = id; // DON'T SET IT DIRECTLY
      // console.log("App.roboID.this.state.cardClicked: ", this.state.cardClicked); 
      // console.log(
      //   "App.roboID.this.state.robots[id].beenclicked: ",
      //   this.state.robots.filter(robot => robot.id === id)[0].beenclicked
      // )
      // console.log(`In After CB, Current Score: ${this.state.currentScore}; High Score: ${this.state.highScore}`);
      console.log(`In After CB, Current Score: ${this.state.currentScore}; High Score: ${this.state.highScore}`);
      // console.log(this.state.robots, "newly shuffled robots after clicking")
      return id;
    })
  } else {
    console.log("Game Over!");
    // Add card shake animation for 1 sec
    // Add reset of all beenclicked's
    
    // console.log("BEFORE CLEARING, Let's look at robots.beenlicked...");

    // this.state.robots.map ( (robot) => { // Just Reading, not setting state
    //   return console.log(`robot.id: ${robot.id}; robot.beenclicked ${robot.beenclicked}`);
    // });

    // Now clear all the beenclicked's
    this.clearAllClicks();
    // Update Score
    this.setState({currentScore: 0},
      () => {
        return console.log(`Current Score: ${this.state.currentScore}; High Score: ${this.state.highScore}`);
      }
    )
  }
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
    // console.log("shuffleArray got called!");

    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log("SHUFFLED array: ", array);
    return array;
  };


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log("filteredRobots: ", filteredRobots);

    return (
      <div className='tc'> {/** tc = tachyon text-align: center;  **/}
        <FixedNavbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          wonDisplayed={this.state.wonDisplayed}
        />
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

