import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/LoginScreen/registerViaMedium";
import Login from "./pages/LoginScreen/loginViaMedium";
import FindUser from "./pages/FindUser";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import { robots } from './Components/CardList/robots';
// eslint-disable-next-line
// import RoboTitle from './Components/RoboTitle/RoboTitle';
import './App.css';
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
      wonDisplayed: false,
      // SafeBook Specific Additions
      // first_name: '',
      // middle_name: '',
      // last_name: '',
      // username:'',
      // password:'',
      // user_pic: '',
      // birthdate: '',
      // age: '',
      // id: '',
      // pictures: [],
      // Array of user objects
      users: [],
      // Single user object
    }
    // this.onDrop = this.onDrop.bind(this);
  }

  // For Images in Registration
  // onDrop(picture) {
  //   this.setState({
  //       pictures: this.state.pictures.concat(picture),
  //   });
  // }

  setTopState = (newUser) => {
    this.setState((pvSt) => {
      const updatedUsers = pvSt.users.concat(newUser);
      // console.log("AFTER PUSH in APP.setTopState - this.state.users[0]: ", this.state.users[0]);
      return ({users: updatedUsers})
    })
  }

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
    
    // PSEUDO CODE for this function...
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
      console.log(`In After CB, Current Score: ${this.state.currentScore}; High Score: ${this.state.highScore}`);
      return id;
    })
  } else {
    console.log("Game Over!");
    // Add card shake animation for 1 sec (TBD... Added You Won instead, so far)
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
// Possible forms of setState: object, function with callback, or 
// object with callback... see above. General form, see below
// this.setState(function(previousState){},callbackToExecuteAfterSetState)
// this.setState({},callbackToExecuteAfterSetState)

  shuffleArray = () => {
    let array = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log("event.target.value: ", event.target.value);
  };

  render() {
    console.log("AFTER PUSH in APP.render - this.state: ", this.state);
    console.log("AFTER PUSH in APP.render - this.state.users[0]: ", this.state.users[0]);
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    // MUST populate state.users[] from database
    // to avoid no-persistence work-around
    const filteredUsers = this.state.users.filter(user => {
      return user.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log("filteredRobots: ", filteredRobots);
    return (
      <Router>
        {/* <div> */}
        {/* <Nav /> */}
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
          <Switch>
            {/* <Route exact path="/register" component={Register} /> */}
            <Route exact path="/register"
              render={(props) => <Register {...props} 
              topLevelState={(newUser) => this.setTopState(newUser)}
              />}
            />
            <Route exact path="/" component={Login} />
            <Route exact path="/home" 
              render={(props) => <HomePage {...props}
              // EDGAR suggested (not req'd) ---> componentDidMount={(props) => <HomePage {...props}
              robots={filteredRobots}
              users={filteredUsers}
              shuffle={() => this.setState({ robots: this.shuffleArray() })}
              getRoboID={this.roboID}
             />}
            />
            {/* <Route exact path="/home" component={HomePage} /> */}
            {/* <Route exact path="/:id" component={FindUser} /> */}
            <Route exact path="/finduser" 
              render={(props) => <FindUser {...props}
              robots={filteredRobots}
              users={filteredUsers}
              searchChange={(event) => this.setState({searchfield: event.target.value})}
              shuffle={() => this.setState({ robots: this.shuffleArray() })}
              // shuffle={(event) => this.onSearchChange() }
              getRoboID={this.roboID}
             />}
            />
            <Route component={NoMatch} />
          </Switch>


{/* 
        <RoboList
          robots={filteredRobots}
          shuffle={() => this.setState({ robots: this.shuffleArray() })}
          getRoboID={this.roboID}
        >
        </RoboList>
 */}
        </div>
      </Router>
    )
  }
};

