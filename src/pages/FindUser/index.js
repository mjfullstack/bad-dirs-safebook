import React from "react";
// import {Container, Row, Col} from '../../Components/Grid/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBox from "../../Components/SearchBox";
import RoboList from "../../Components/CardList/RoboList";
// import RaisedButton from 'material-ui/RaisedButton';
import './style.css';


// const onSearchChange = (event) => {
//   this.setState({ searchfield: event.target.value })
//   console.log("event.target.value: ", event.target.value);
// };

class FindUser extends React.Component {
  render() {
    const {robots , shuffle, searchChange, getRoboID} = this.props;
    // console.log("FindUserPage - props: ", robots, shuffle, getRoboID);
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <h2 className='myPageTitle'>Find User - Type Letters to Search Names...</h2>
            <SearchBox
              searchChange={searchChange}
              />
            <RoboList
              robots={robots}
              // shuffle={() => this.setState({ robots: this.shuffleArray() })}
              // shuffle={() => onSearchChange()}
              shuffle={shuffle}
              getRoboID={getRoboID}
            />
            {/* <RaisedButton label="Search" href='/finduser' primary={true} style={style} onClick={(event) => this.handleLoginClick(event)}/> */}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};
  // const style = {
  //   margin: 15,
  // }

export default FindUser;
