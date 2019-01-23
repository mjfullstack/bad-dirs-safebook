import React, { Component } from 'react';
import {Container, Row, Col} from '../../Components/Grid/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './style.css';

class Register extends Component {
constructor(props){
  super(props);
  this.state={
  first_name: '',
  middle_name: '',
  last_name: '',
  username:'',
  password:'',
  user_pic: '',
  birthdate: '',
  age: ''

  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Login"
           /> */}
          {/* <RoboTitle /> */}

          <Container fluid='fluid'>
            <h2 className='myPageTitle'> Registration</h2>
            <Row className='dataEntry'>
              <Col size='md-4' margin='0rem'>
                <TextField
                  hintText="Enter your FIRST name"
                  floatingLabelText="First Name"
                  onChange = {(event,newValue) => this.setState({first_name:newValue})}
                />
              </Col>
              <Col size='md-4' margin='0rem'>
                <TextField
                  hintText="Enter your MIDDLE name"
                  floatingLabelText="Middle Name"
                  onChange = {(event,newValue) => this.setState({middle_name:newValue})}
                />
              </Col>
              <Col size='md-4'>
                <TextField
                  // type="password"
                  hintText="Enter your LAST name"
                  floatingLabelText="Last Name"
                  onChange = {(event,newValue) => this.setState({last_name:newValue})}
                />
              </Col>
            </Row>
          </Container>
          <RaisedButton label="Submit" href="/home" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;