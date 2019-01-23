import React, { Component } from 'react';
import {Container, Row, Col} from '../../Components/Grid/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './style.css';


import ImageUploader from 'react-images-upload';

/****************************** ORIG UPLOAD CODE FOR REF **************
class App extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}
******************************/


class Register extends Component {
  // constructor(props){
  //   super(props);
    // this.state={
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
      // // Arrau of user objects
      // users: [],
      // // Single user object
      // user: {
      //         // Replicate items captured above when entered into a new user
      //         first_name: '',
      //         middle_name: '',
      //         last_name: '',
      //         username:'',
      //         password:'',
      //         user_pic: '',
      //         birthdate: '',
      //         age: '',
      //         id: '',
      //         pictures: []
      // }
    // };
    // this.onDrop = this.onDrop.bind(this);
  // }

  // onDrop(picture) {
  //   this.setState({
  //       pictures: this.state.pictures.concat(picture),
  //   });
  // }
  
  handleClick(event, myState) {
    let newUser = {...this.state.newUser};
    console.log("ENTRY to handleClick - newUser: ", newUser);
    console.log("ENTRY to handleClick - this.state: ", this.state);
    console.log("ENTRY to handleClick - this.state.users: ", this.state.users);
    console.log("ENTRY to handleClick - myState: ", myState);
    this.setState(prevState => {
      return (
        // id: prevState.users.length,
        // user_pic: this.state.pictures[this.id], // Change LATER, MWJ
        newUser: {
          ...prevState.newUser,
          id: prevState.users.length,
          first_name: prevState.first_name,
          middle_name: prevState.middle_name,
          last_name: prevState.last_name,
          username: prevState.username,
          user_pic: prevState.user_pic,
          birthdate: prevState.birthdate,
          age: prevState.age,
          pictures: prevState.pictures
        }
      )
    },
      () => {
        console.log("IN CALLBACK - newUser: ", newUser);
        console.log("IN CALLBACK - this.state: ", this.state);
        console.log("IN CALLBACK - this.state.users: ", this.state.users);
        // console.log(`this.state.users.first_name: ${this.state.users[0].first_name}`);
        // console.log(`this.state.users.middle_name: ${this.state.users[0].middle_name}`);
        // console.log(`this.state.users.last_name: ${this.state.users[0].last_name}`);
        // console.log(`this.state.users.pictures[0]: ${this.state.users[0].pictures[0]}`);
        console.log("IN CALLBACK - myState: ", myState);
        // console.log(`myState.user.first_name: ${myState.user[0].first_name}`);
        // console.log(`myState.user.middle_name: ${myState.user[0].middle_name}`);
        // console.log(`myState.user.last_name: ${myState.user[0].last_name}`);
        // console.log(`myState.user.pictures[0]: ${myState.user[0].pictures[0]}`);
      }
    )
  }
  render() {
    const {state} = this.props;
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
              <Col size='md-4'>
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
            <Row>
              <Col size='md-4' margin='2rem' />
              <Col size='md-4' margin='2rem'>
                <ImageUploader
                  withIcon={true}
                  withPreview={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                />
              </Col>
              <Col size='md-4' margin='2rem' />
            </Row>
          </Container>
          <RaisedButton 
            label="Submit"
            href="#"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event, {state})}
          />
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