import React, {Component} from "react";
import SearchBox from "../../Components/SearchBox";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import './style.css';
import RoboTitle from "../../Components/RoboTitle/RoboTitle";


class LoginScreen extends Component {
  render() {
    return (
      <div>
        <h1 className='myPageTitle'> Registration</h1>
        {/* <SearchBox /> */}
        <Input
        />
        <Button
          // onClick={() => this.setState({ robots: this.shuffleArray(filteredRobots)})}
          type="primary" // these elements are passed down through
          className="input-lg" // Deconsructed props - See Button/index.js
        >
        Register
        </Button>
      </div>
    );
  }
};

export default LoginScreen;
